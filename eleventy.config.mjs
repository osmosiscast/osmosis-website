import * as sass from "sass";
import path from "path";
import { readFileSync } from "fs";

const siteConfig = JSON.parse(readFileSync("content/config.json", "utf-8"));
const postsPerPage = siteConfig.postsLimit || 4;

// Matches Gatsby's toKebabCase — splits on word boundaries including camelCase
function toSlug(str) {
  const matches = str.match(
    /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+|[A-Z]|[0-9]+/g
  );
  return matches ? matches.map((x) => x.toLowerCase()).join("-") : "";
}

// Page 0 gets the base path, page N gets /page/N/
function paginationHref(basePath, pageNumber) {
  if (pageNumber === 0) return basePath;
  return `${basePath}page/${pageNumber}/`;
}

function getPublishedPosts(collectionApi, buildTime) {
  const posts = collectionApi
    .getFilteredByGlob("src/posts/*/index.md")
    .filter((item) => {
      if (item.data.template !== "post") return false;
      if (item.data.draft) return false;
      if (!item.data.date || isNaN(new Date(item.data.date))) return false;
      return new Date(item.data.date) <= buildTime;
    })
    .sort((a, b) => new Date(b.data.date) - new Date(a.data.date));

  for (const post of posts) {
    if (!post.data.category) {
      console.warn(`Post "${post.data.title}" has no category`);
    }
    if (!post.data.tags || post.data.tags.length === 0) {
      console.warn(`Post "${post.data.title}" has no tags`);
    }
  }

  return posts;
}

function buildPaginatedPages(groupName, posts, urlPrefix) {
  const slug = toSlug(groupName);
  const basePath = `${urlPrefix}${slug}/`;
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const pages = [];

  for (let i = 0; i < totalPages; i++) {
    pages.push({
      name: groupName,
      slug,
      pageNumber: i,
      posts: posts.slice(i * postsPerPage, (i + 1) * postsPerPage),
      href: {
        previous: i > 0 ? paginationHref(basePath, i - 1) : null,
        next: i < totalPages - 1 ? paginationHref(basePath, i + 1) : null,
      },
    });
  }

  return pages;
}

export default function (eleventyConfig) {
  const buildTime = new Date();
  eleventyConfig.addGlobalData("buildTime", buildTime);
  eleventyConfig.addGlobalData(
    "theme_js",
    readFileSync("src/assets/js/theme.js", "utf-8")
  );

  // Ignore Gatsby-only directories during parallel migration
  eleventyConfig.ignores.add("src/components/");
  eleventyConfig.ignores.add("src/templates/");
  eleventyConfig.ignores.add("src/hooks/");
  eleventyConfig.ignores.add("src/utils/");
  eleventyConfig.ignores.add("src/types/");
  eleventyConfig.ignores.add("src/constants/");

  eleventyConfig.addTemplateFormats("scss");

  eleventyConfig.addExtension("scss", {
    outputFileExtension: "css",

    compile: async function (inputContent, inputPath) {
      let parsed = path.parse(inputPath);

      if (parsed.name.startsWith("_") || parsed.name.endsWith(".module")) {
        return;
      }

      let result = sass.compileString(inputContent, {
        loadPaths: [parsed.dir || "."],
      });

      return async () => result.css;
    },
  });

  eleventyConfig.addFilter("postDate", (dateValue) => {
    return new Date(dateValue).toLocaleDateString("en-GB", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  });

  eleventyConfig.addFilter("feedDate", (dateValue) => {
    return new Date(dateValue).toLocaleDateString("en-GB", {
      year: "numeric",
      month: "long",
    });
  });

  eleventyConfig.addFilter("isoDate", (dateValue) => {
    return new Date(dateValue).toISOString().split("T")[0];
  });

  eleventyConfig.addFilter("toSlug", toSlug);

  eleventyConfig.addCollection("posts", (api) =>
    getPublishedPosts(api, buildTime)
  );

  eleventyConfig.addCollection("categoryPages", function (api) {
    const posts = getPublishedPosts(api, buildTime);
    const categories = {};
    for (const post of posts) {
      const cat = post.data.category;
      if (!cat) continue;
      if (!categories[cat]) categories[cat] = [];
      categories[cat].push(post);
    }

    const result = [];
    for (const [category, categoryPosts] of Object.entries(categories)) {
      result.push(
        ...buildPaginatedPages(category, categoryPosts, "/category/")
      );
    }
    return result;
  });

  eleventyConfig.addCollection("tagPages", function (api) {
    const posts = getPublishedPosts(api, buildTime);
    const tags = {};
    for (const post of posts) {
      for (const tag of post.data.tags || []) {
        if (!tags[tag]) tags[tag] = [];
        tags[tag].push(post);
      }
    }

    const result = [];
    for (const [tag, tagPosts] of Object.entries(tags)) {
      result.push(...buildPaginatedPages(tag, tagPosts, "/tag/"));
    }
    return result;
  });

  eleventyConfig.addCollection("categoriesList", function (api) {
    const posts = getPublishedPosts(api, buildTime);
    const categories = {};
    for (const post of posts) {
      const cat = post.data.category;
      if (!cat) continue;
      categories[cat] = (categories[cat] || 0) + 1;
    }
    return Object.entries(categories)
      .map(([name, count]) => ({ name, slug: toSlug(name), count }))
      .sort((a, b) => a.name.localeCompare(b.name));
  });

  eleventyConfig.addCollection("tagsList", function (api) {
    const posts = getPublishedPosts(api, buildTime);
    const tags = {};
    for (const post of posts) {
      for (const tag of post.data.tags || []) {
        tags[tag] = (tags[tag] || 0) + 1;
      }
    }
    return Object.entries(tags)
      .map(([name, count]) => ({ name, slug: toSlug(name), count }))
      .sort((a, b) => a.name.localeCompare(b.name));
  });

  eleventyConfig.addPassthroughCopy("src/assets/js");
  eleventyConfig.addPassthroughCopy({
    "content/osmosis-logo-square.png": "osmosis-logo-square.png",
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    templateFormats: ["njk", "md", "scss"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
