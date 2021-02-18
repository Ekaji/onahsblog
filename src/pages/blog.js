import React from "react"
import { graphql, Link } from "gatsby"
import Footer from '../components/layout/Footer'
import styles from '../styles/grid.module.css'
import "normalize.css"

export default function Blog({ data }) {
  const { posts } = data.blog;

  return (
    <div>
      <h1>Onahs Blog</h1>
      <h2>Articles</h2>
     <div className={styles.articleGrid}>
      {posts.map(post => (
        <Link  to={post.fields.slug} >
          <article key={post.id}>
            <h2>{post.frontmatter.title}</h2>
            <small>{post.frontmatter.author}, {post.frontmatter.date}</small>
            <p>{post.excerpt}</p>
          </article>
        </Link>
          )
        )
      }
     </div>
     <Footer />
    </div>
  )
}

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark(
      sort: {order: DESC, fields: [frontmatter___date]}
    ) {
      posts: nodes {
        fields {
          slug
        }
        frontmatter {
          date(fromNow: true)
          title
          author
          tags
        }
        excerpt
        id
      }
    }
  }
`

// export const pageQuery = graphql`
//   query MyQuery {
//     blog: allMarkdownRemark {
//       posts: nodes {
//       fields {
//           slug
//         }
//         frontmatter {
//           date(fromNow: true)
//           title
//           author
//         }
//         excerpt
//         id
//       }
//     }
//   }
// `