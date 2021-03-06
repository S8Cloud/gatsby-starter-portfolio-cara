require(`dotenv`).config({
  path: `.env`,
})
module.exports = {
  siteMetadata: {
    siteTitle: `AS207716`,
    siteTitleAlt: `AS207716 - DCC TECH LTD`,
    siteHeadline: `AS207716 - DCC Network by dcc.cat`,
    siteUrl: `https://as207716.com`,
    siteDescription: `Fast, Easy and Reliable Worldwide Network.`,
    siteLanguage: `en`,
    siteImage: `/favicon.png`,
    author: `@cloudatcost`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cara`,
        short_name: `Cara`,
        description: `DCC TECH LTD Network, AS207716`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#6872e5`,
        display: `standalone`,
        icons: [
          {
            src: `/favicon.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    // `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
