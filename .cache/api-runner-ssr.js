var plugins = [{
      name: 'gatsby-remark-autolink-headers',
      plugin: require('/Users/jamiemcmillan/Documents/Development/osmosis-website/node_modules/gatsby-remark-autolink-headers/gatsby-ssr.js'),
      options: {"plugins":[],"offsetY":0,"className":"anchor"},
    },{
      name: 'gatsby-plugin-sitemap',
      plugin: require('/Users/jamiemcmillan/Documents/Development/osmosis-website/node_modules/gatsby-plugin-sitemap/gatsby-ssr.js'),
      options: {"plugins":[],"query":"\n          {\n            site {\n              siteMetadata {\n                siteUrl: url\n              }\n            }\n            allSitePage(\n              filter: {\n                path: { regex: \"/^(?!/404/|/404.html|/dev-404-page/)/\" }\n              }\n            ) {\n              nodes {\n                path\n              }\n            }\n          }\n        ","output":"/","createLinkInHead":true,"entryLimit":45000,"excludes":[]},
    },{
      name: 'gatsby-plugin-manifest',
      plugin: require('/Users/jamiemcmillan/Documents/Development/osmosis-website/node_modules/gatsby-plugin-manifest/gatsby-ssr.js'),
      options: {"plugins":[],"name":"Osmosis","short_name":"Osmosis","theme_color":"hsl(31, 92%, 62%)","background_color":"hsl(0, 0%, 100%)","icon":"content/osmosis-logo-square.png","display":"standalone","start_url":"/","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"c64f1cc1e9b570ab5289b24a55eb744a"},
    },{
      name: 'gatsby-plugin-image',
      plugin: require('/Users/jamiemcmillan/Documents/Development/osmosis-website/node_modules/gatsby-plugin-image/gatsby-ssr.js'),
      options: {"plugins":[]},
    },{
      name: 'default-site-plugin',
      plugin: require('/Users/jamiemcmillan/Documents/Development/osmosis-website/gatsby-ssr.ts'),
      options: {"plugins":[]},
    },{
      name: 'partytown',
      plugin: require('/Users/jamiemcmillan/Documents/Development/osmosis-website/node_modules/gatsby/dist/internal-plugins/partytown/gatsby-ssr.js'),
      options: {"plugins":[]},
    }]
/* global plugins */
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

function augmentErrorWithPlugin(plugin, err) {
  if (plugin.name !== `default-site-plugin`) {
    // default-site-plugin is user code and will print proper stack trace,
    // so no point in annotating error message pointing out which plugin is root of the problem
    err.message += ` (from plugin: ${plugin.name})`
  }

  throw err
}

export function apiRunner(api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  const results = []
  plugins.forEach(plugin => {
    const apiFn = plugin.plugin[api]
    if (!apiFn) {
      return
    }

    try {
      const result = apiFn(args, plugin.options)

      if (result && argTransform) {
        args = argTransform({ args, result })
      }

      // This if case keeps behaviour as before, we should allow undefined here as the api is defined
      // TODO V4
      if (typeof result !== `undefined`) {
        results.push(result)
      }
    } catch (e) {
      augmentErrorWithPlugin(plugin, e)
    }
  })

  return results.length ? results : [defaultReturn]
}

export async function apiRunnerAsync(api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  const results = []
  for (const plugin of plugins) {
    const apiFn = plugin.plugin[api]
    if (!apiFn) {
      continue
    }

    try {
      const result = await apiFn(args, plugin.options)

      if (result && argTransform) {
        args = argTransform({ args, result })
      }

      // This if case keeps behaviour as before, we should allow undefined here as the api is defined
      // TODO V4
      if (typeof result !== `undefined`) {
        results.push(result)
      }
    } catch (e) {
      augmentErrorWithPlugin(plugin, e)
    }
  }

  return results.length ? results : [defaultReturn]
}
