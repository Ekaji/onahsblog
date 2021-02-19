import React from "react"
import { graphql, Link } from "gatsby"
import Footer from '../components/layout/Footer'
import styles from '../styles/grid.module.css'
import "normalize.css"
import '../styles/blog.styles.css'

// import kebabCase from "lodash/kebabCase"

export default function Blog({ data }) {
  const { posts } = data.blog;
  let allTags = posts.map(post => post.frontmatter.tags )
  let uniqueTags = [...new Set(allTags)]
  console.log(uniqueTags)

  return (
    <div className='blog'>
      <h1>Onahs Blog</h1>
      <h2>Articles</h2>
     
     <div className={styles.articleGrid}>
      {posts.map(post => (
        <Link  to={post.fields.slug} >
          <article key={post.id}>
            <h2>{post.frontmatter.title}</h2>
            <h4>{post.frontmatter.tags}</h4>
            <small>{post.frontmatter.author}, {post.frontmatter.date}</small>
            <p>{post.excerpt}</p>
          </article>
        </Link>
          )
        )
      }
     </div>
     <aside>
        <h3>Tags</h3>
        <ul>
          {posts.map((post, i) => (
            
            (<li key={post.id} style={{listStyleType: 'none'}}>
              <Link to={`/tags/${post.frontmatter.tags}`}>
                {uniqueTags[i]} 
              </Link>
            </li>)
          )
         )
        }
        </ul>
      </aside>
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