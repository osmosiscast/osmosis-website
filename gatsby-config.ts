import path from "path";

import config from "./content/config.json";

const feedOptions = {
  title: config.title,
  description: config.author.bio,
  feed_url: config.author.contacts.rss,
  site_url: config.url,
  image_url:
    "https://assets.osmosiscast.com/static-assets/osmosis-logo-square.png",
  // docs: "http://example.com/rss/docs.html",
  managingEditor: config.author.name,
  webMaster: config.author.name,
  copyright: config.copyright,
  language: "en-gb",
  categories: ["Science", "Natural Sciences"],
  ttl: "60",
  custom_namespaces: {
    itunes: "http://www.itunes.com/dtds/podcast-1.0.dtd",
    podcast: "https://podcastindex.org/namespace/1.0",
  },
  custom_elements: [
    { "itunes:subtitle": config.subtitle },
    { "itunes:author": config.author.name },
    { "itunes:summary": config.author.bio },
    {
      "itunes:owner": [
        { "itunes:name": config.author.name },
        { "itunes:email": config.author.contacts.email },
      ],
    },
    {
      "itunes:image": {
        _attr: {
          href: "https://assets.osmosiscast.com/static-assets/osmosis-logo-square.png",
        },
      },
    },
    {
      "itunes:category": [
        {
          _attr: {
            text: "Science",
          },
        },
        {
          "itunes:category": {
            _attr: {
              text: "Natural Sciences",
            },
          },
        },
      ],
    },
    { "itunes:explicit": "false" },
    { "podcast:locked": "yes" },
    { "podcast:guid": "a256ef66-55a0-54bc-aee8-1f9928bebd48" },
  ],
};
export default {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    url: config.url,
    menu: config.menu,
    title: config.title,
    author: config.author,
    subtitle: config.subtitle,
    copyright: config.copyright,
    postsLimit: config.postsLimit,
    disqusShortname: config.disqusShortname,
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: path.resolve("content"),
      },
    },
    {
      resolve: "gatsby-plugin-podcast-feed",
      options: {
        feedOptions,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 960,
              withWebp: true,
              loading: "lazy",
            },
          },
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: { wrapperStyle: "margin-bottom: 1.0725rem" },
          },
          "gatsby-remark-autolink-headers",
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
          "gatsby-remark-external-links",
        ],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteUrl: url
              }
            }
            allSitePage(
              filter: {
                path: { regex: "/^(?!/404/|/404.html|/dev-404-page/)/" }
              }
            ) {
              nodes {
                path
              }
            }
          }
        `,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: config.title,
        short_name: config.title,
        theme_color: "hsl(31, 92%, 62%)",
        background_color: "hsl(0, 0%, 100%)",
        icon: "content/osmosis-logo-square.png",
        display: "standalone",
        start_url: "/",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-catch-links",
    "gatsby-plugin-sass",
  ],
};
