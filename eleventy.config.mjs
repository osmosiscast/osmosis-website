import * as sass from "sass";
import path from "path";
import { readFileSync } from "fs";

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

  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/posts/*/index.md")
      .filter((item) => {
        if (item.data.template !== "post") return false;
        if (item.data.draft) return false;
        if (!item.data.date || isNaN(new Date(item.data.date))) return false;
        return new Date(item.data.date) <= buildTime;
      })
      .sort((a, b) => new Date(b.data.date) - new Date(a.data.date));
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
