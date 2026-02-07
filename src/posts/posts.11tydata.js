export default {
  layout: "post.njk",
  eleventyComputed: {
    permalink: (data) => {
      if (data.template !== "post") {
        console.warn(`[posts] Unexpected template "${data.template}" in ${data.page.inputPath}`);
        return false;
      }
      if (data.draft) return false;
      if (!data.date || isNaN(new Date(data.date))) return false;
      if (new Date(data.date) > data.buildTime) return false;
      const slug = data.slug.startsWith("/") ? data.slug : `/posts/${data.slug}`;
      return `${slug}/`;
    },
    eleventyExcludeFromCollections: (data) => {
      if (data.template !== "post") return true;
      if (data.draft) return true;
      if (!data.date || isNaN(new Date(data.date))) return true;
      if (new Date(data.date) > data.buildTime) return true;
      return false;
    },
  },
};
