/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

 require(`dotenv`).config({
  path: `.env`,
})


module.exports = {
  /* Your site config here */
siteMetadata: {
  title: `Onahs_Blog`,
  description: `Blog on Programing and web developement`,
  author: `Ekaji_Onah`,
  image: `https://cdn.pixabay.com/photo/2015/09/06/00/34/iphone-926663_960_720.jpg`,
  url: `https://onahsblog.vercel.app`,
  keywords: ``,

},
plugins: [
  {
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      trackingIds: [
        process.env.GOOGLE_MEASUREMENT_ID, // Google Analytics / GA
      ],
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images/`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `blog`,
      path: `${__dirname}/src/blog/`,
    },
  },
  {
    resolve: `gatsby-plugin-typography`,
    options: {
      pathToConfigModule: `src/utils/typography`,
    },
  },
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-sharp`, 
  `gatsby-transformer-sharp`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/src/images/`,
    },
  },
  `gatsby-plugin-dark-mode`,
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-highlight-code`,
          options: {
            terminal: 'carbon',
            theme: 'shades-of-purple'
          }
        },
      ],
    },
  },
],
}