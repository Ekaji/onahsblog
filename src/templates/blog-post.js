import React from "react"
import { graphql, Link } from "gatsby"
import Layout from '../components/layout/Layout'
// import Img from "gatsby-image"

export default function BlogPost({ data, pageContext }) {
  const post = data.markdownRemark
  const { previous, next } = pageContext
  // let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid


  return (
    <Layout>
      <div style={{margin: '5px 1rem'}}>
      {/* <Img fluid={featuredImgFluid} /> */}
        <h1>{post.frontmatter.title}</h1>
        <small>published {post.frontmatter.date}</small>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />

        <ul
                style={{
                    display: `flex`,
                    flexWrap: `wrap`,
                    justifyContent: `space-between`,
                    listStyle: `none`,
                    padding: 0,
                }}
            >
                <li>
                    {previous && (
                        <Link to={previous.fields.slug} rel="prev">
                            {"<<"+previous.frontmatter.title}
                        </Link>
                    )}
                </li>
                <li>
                    {next && (
                        <Link to={next.fields.slug} rel="next">
                            {next.frontmatter.title + " >>"}
                        </Link>
                    )}
                </li>
            </ul>
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