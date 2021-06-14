/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
module.exports = {
  /* Your site config here */
siteMetadata: {
  title: `Onahs_Blog`,
  description: `Blog on Programing and web developement`,
  author: `Ekaji_Onah`,
  image: `/src/images/nature.jpg`,
  url: `onahsblog.vercel.app`,
  keywords: ``,

},
plugins: [
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