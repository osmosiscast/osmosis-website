export default {
  layout: "page.njk",
  eleventyComputed: {
    permalink: (data) => {
      if (data.template !== "page") {
        console.warn(`[pages] Unexpected template "${data.template}" in ${data.page.inputPath}`);
        return false;
      }
      // filePathStem preserves full directory hierarchy, e.g. /pages/about/index → /pages/about/
      return data.page.filePathStem.replace(/\/index$/, "/");
    },
  },
};
