import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
// import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ description, lang, meta, title}) => {
    const { site } = useStaticQuery(
      graphql`
        query {
          site {
            siteMetadata {
              title
              description
              author
              image
              keywords
            }
          }
        }
      `
    )
    const image = site.siteMetadata.image
    const keywords = site.siteMetadata.keywords
    const metaDescription = description || site.siteMetadata.description
    const defaultTitle = site.siteMetadata?.title
    // const google-site-verification
  
    return (
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={title}
        titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
        
        meta={[
          {
            name: `description`,
            content: metaDescription,
          },
          {
            name: `keywords`,
            content: keywords,
          },
          {
            property: `og:title`,
            content: title,
          },
          {
            property: `og:description`,
            content: metaDescription,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            property: `og:image`,
            content: image,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:image`,
            content: image,
          },
          {
            name: `twitter:creator`,
            content: site.siteMetadata?.author || ``,
          },
          {
            name: `twitter:title`,
            content: title,
          },
          {
            name: `twitter:description`,
            content: metaDescription,
          },
        ].concat(meta)}
      >
        {/* <meta name="google-site-verification" content="EYzIIkGdKLFWwCqQeowPHegFyKSQqFNxU3Z5Bov0tlA" data-react-helmet="true" /> */}
      </Helmet >
    )
  }
  
  SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
  }
  
  SEO.propTypes = {
    description: PropTypes.string,
    image: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
  }
  
  export default SEO