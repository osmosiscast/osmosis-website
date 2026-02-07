export default {
  layout: "page.njk",
  eleventyComputed: {
    permalink: (data) => {
      if (data.template !== "page") return false;
      // Derive URL from file path: about/index.md → /pages/about/
      return `/pages/${data.page.fileSlug}/`;
    },
  },
};
