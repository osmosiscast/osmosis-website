import { CreatePagesArgs } from "gatsby";

import * as types from "../types";

export interface PostsQueryResult {
  allMarkdownRemark: {
    edges?: Array<types.Edge>;
  };
}

const getAllPosts = async (graphql: CreatePagesArgs["graphql"]) => {
  const result = await graphql<PostsQueryResult>(`
    {
      allMarkdownRemark(
        filter: {
          frontmatter: { draft: { ne: true }, template: { eq: "post" } }
        }
      ) {
        edges {
          node {
            frontmatter {
              template
              slug
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return result?.data?.allMarkdownRemark;
};

const getPublishedPosts = async (graphql: CreatePagesArgs["graphql"]) => {
  const result = await graphql<PostsQueryResult>(`
    {
      allMarkdownRemark(
        filter: {
          frontmatter: { draft: { ne: true }, template: { eq: "post" } }
          fields: { isScheduledPost: { eq: false } }
        }
      ) {
        edges {
          node {
            frontmatter {
              template
              slug
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return result?.data?.allMarkdownRemark;
};

const postsQuery = (queryBody) =>
  process.env.NODE_ENV === "production"
    ? getPublishedPosts(queryBody)
    : getAllPosts(queryBody);

export default postsQuery;
