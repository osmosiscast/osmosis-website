import type { GatsbyNode } from "gatsby";

export { createPages } from "./internal/gatsby/create-pages";
export { onCreateNode } from "./internal/gatsby/on-create-node";
export { onCreateWebpackConfig } from "./internal/gatsby/on-create-webpack-config";

// Skip Eleventy directory data files that Gatsby picks up from src/pages/
export const onCreatePage: GatsbyNode["onCreatePage"] = ({ page, actions }) => {
  if (page.path.includes("11tydata")) {
    actions.deletePage(page);
  }
};
