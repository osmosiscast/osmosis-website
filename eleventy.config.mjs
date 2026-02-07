import * as sass from "sass";
import path from "path";
import { readFileSync } from "fs";

export default function (eleventyConfig) {
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
