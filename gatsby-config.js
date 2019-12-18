require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitleAlt: `AS207716 - DCC TECH LTD`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.UA-104610329-5,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cara`,
        short_name: `Cara`,
        description: `DCC TECH LTD Network, AS207716`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/favicon.png`,
            sizes: `256x256`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
