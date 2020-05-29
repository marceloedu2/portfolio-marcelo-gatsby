/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const siteMetadata = require("./config/metadata")
const path = require("path")

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#5400C1`,
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Portfolio marcelo`,
        short_name: `Portfolio marcelo araújo`,
        start_url: `/`,
        background_color: `#FFFF`,
        theme_color: `#5400C1`,
        display: `standalone`,
        icon: `./src/assets/icon.png`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-twitter-cards`,
            options: {
              title: siteMetadata.title,
              separator: '|',
              author: 'Marcelo Eduardo Araujo',
              background: '#FFFF'
              fontColor: '#5400C1',
              titleFontSize: 96,
              subtitleFontSize: 60,
              fontStyle: 'roboto',
              fontFile: url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap')
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.example.com`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV === "production",
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: {
          patterns: [`**/styles.(js|ts)?(x)`],
        },
      },
    },
    `gatsby-plugin-offline`,
  ],
}
