const path = require(`path`)

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const gatsbyConfig = {
  flags: {
    DEV_SSR: false,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-theme-ui`,
      // options: {
      //   preset: require("./src/theme"),
      // },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-jam-cms`,
      options: {
        source: process.env.GATSBY_WP,
        apiKey: process.env.GATSBY_JAM_CMS_API_KEY,
        fields: path.join(__dirname, "src/fields"),
        settings: {
          postsPerPage: 12,
        },
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Barlow Semi Condensed",
              variants: ["200", "300", "400", "500", "600", "700"],
            },
          ],
        },
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/static/`,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `${process.env.GATSBY_WP}/graphql`,
        verbose: true,
        schema: {
          queryDepth: 8,
          typePrefix: `Wp`,
        },
        develop: {
          nodeUpdateInterval: 5000,
          hardCacheMediaFiles: true,
        },
        debug: {
          graphql: {
            showQueryOnError: true,
            showQueryVarsOnError: true,
            copyQueryOnError: true,
            panicOnError: false,
          },
        },
      },
    },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: "tomato",
        showSpinner: false,
      },
    },
    "gatsby-plugin-catch-links",
    {
      resolve: "gatsby-source-gravityforms",
      options: {
        baseUrl: process.env.GATSBY_WP,
        api: {
          key: process.env.GATSBY_GF_KEY,
          secret: process.env.GATSBY_GF_SECRET,
        },
      },
    },
    // {
    //   resolve: "gatsby-plugin-sitemap",
    //   options: {
    //     exclude: ["/preview/*"],
    //     query: `{
    //       site {
    //         siteMetadata {
    //           siteUrl
    //         }
    //       }
    //       allSitePage(filter: {context: {id: {ne: null}}}) {
    //         edges {
    //           node {
    //             path
    //             context {
    //               id
    //             }
    //           }
    //         }
    //       }
    //   }`,
    //   },
    // },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/account/*`] },
    },
    {
      resolve: "gatsby-plugin-netlify",
      options: {
        headers: {
          "/*": [
            // these headers are default except x-frame-options is omitted to allow previewing the site via iframe
            `X-XSS-Protection: 1; mode=block`,
            `X-Content-Type-Options: nosniff`,
          ],
        },
        mergeSecurityHeaders: false,
      },
    },
  ],
}

if (process.env.GATSBY_FACEBOOK_PIXEL) {
  gatsbyConfig.plugins.push({
    resolve: `gatsby-plugin-facebook-pixel`,
    options: {
      pixelId: process.env.GATSBY_FACEBOOK_PIXEL,
    },
  })
}

if (process.env.GATSBY_GOOGLE_TAG_MANAGER) {
  gatsbyConfig.plugins.push({
    resolve: `gatsby-plugin-google-tagmanager`,
    options: {
      id: process.env.GATSBY_GOOGLE_TAG_MANAGER,
      includeInDevelopment: false,
    },
  })
}

if (process.env.GATSBY_GOOGLE_ANALYTICS) {
  gatsbyConfig.plugins.push({
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: process.env.GATSBY_GOOGLE_ANALYTICS,
      head: true,
      anonymize: true,
    },
  })
}

if (process.env.GATSBY_LINKEDIN_PARTNER_ID) {
  gatsbyConfig.plugins.push({
    resolve: `gatsby-plugin-linkedin-insight`,
    options: {
      partnerId: process.env.GATSBY_LINKEDIN_PARTNER_ID,
      includeInDevelopment: false,
    },
  })
}

if (process.env.GATSBY_RECAPTCHA) {
  gatsbyConfig.plugins.push({
    resolve: `gatsby-plugin-recaptcha`,
    options: {
      async: true,
      defer: true,
    },
  })
}

if (process.env.NODE_ENV === "production") {
  gatsbyConfig.plugins.push("gatsby-plugin-remove-serviceworker")
  // gatsbyConfig.plugins.push("gatsby-plugin-favicon")
}

module.exports = gatsbyConfig
