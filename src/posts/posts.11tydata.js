export default function () {
  const now = new Date();

  return {
    layout: "post.njk",
    eleventyComputed: {
      permalink: (data) => {
        if (data.template !== "post") return false;
        if (data.draft) return false;
        if (new Date(data.date) > now) return false;
        // slug already includes leading slash, e.g. "/posts/pizza-alchemy"
        return `${data.slug}/`;
      },
      eleventyExcludeFromCollections: (data) => {
        if (data.draft) return true;
        if (new Date(data.date) > now) return true;
        return false;
      },
    },
  };
}
