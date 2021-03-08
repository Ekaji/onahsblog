import React from "react"
import { graphql, Link } from "gatsby"
import Layout from '../components/layout/Layout'
import '../styles/blogPostMediaQueries.styles.css'

// import Img from "gatsby-image"

export default function BlogPost({ data, pageContext }) {
  const post = data.markdownRemark
  const { previous, next } = pageContext
  // let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid


  return (
    <Layout>
      <div className='blogpost--container'>
      {/* <Img fluid={featuredImgFluid} /> */}
        <h1>{post.frontmatter.title}</h1>
        <small>published {post.frontmatter.date}</small>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />

        <div style={{
                    display: `flex`,
                    flexDirection: `row`,
                    justifyContent: `space-between`,
                    listStyle: `none`,
                    padding: 0,
                    margin: `0px`,
                    color: `var(--text)`
                }}>

                    {previous && (
                        <Link style={{
                          marginLeft: `0px`,
                          maxWidth: `150px`,
                          border: `1px solid var(--text)`,
                          borderRadius: `3px`,
                        }} to={previous.fields.slug} rel="prev">
                            {"<<"+previous.frontmatter.title}
                        </Link>
                    )}

                    {next && (
                        <Link style={{
                          marginRight: `0px`,
                          maxWidth: `150px`,
                          border: `1px solid var(--text)`,
                          borderRadius: `3px`,
                        }} to={next.fields.slug} rel="next">
                            {next.frontmatter.title + " >>"}
                        </Link>
                    )}
            </div>
            </div>
      </Layout>
  )
}

export const query = graphql`
  query BlogQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(fromNow: true, formatString: "DD MMMM, YYYY")
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`