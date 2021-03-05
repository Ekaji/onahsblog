import React from "react"
import { Link, graphql } from "gatsby"


const BlogList = ({ data, pageContext }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  const { numPages, currentPage } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()


  return (
    <div location={pageContext.location} title={siteTitle}>

      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <Link key={node.fields.slug} style={{ boxShadow: "none" }} to={node.fields.slug}>
            <div key={node.fields.slug} className="blog-list">
              <h2
                style={{
                  marginBottom: "1rem",
                }}
              >
                {title}
              </h2>
              {node.frontmatter.date}
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          </Link>
        )
      })}
      <div>
        <ul>
          {!isFirst && (
            <Link
              to={prevPage}
              rel="prev"
            >
              {"<< Prev"}
            </Link>
          )}
          {Array.from({ length: numPages }, (_, i) => (
            <li
              key={`pagination-number${i + 1}`}
              style={{
                margin: 0,
              }}
            >
              <Link
                to={`/${i === 0 ? "" : i + 1}`}
              >
                {i + 1}
              </Link>
            </li>
          ))}
          {!isLast && (
            <Link to={nextPage} rel="next" style={{fontSize: '30px'}}
            >
              {"Next >>"}
            </Link>
          )}
        </ul>
      </div>
    </div>
  )
}

export default BlogList

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`