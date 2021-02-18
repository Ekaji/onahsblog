import React from "react"
import { graphql, Link } from "gatsby"
import Layout from '../components/layout/Layout'

export default function Blog({ data }) {
  const { posts } = data.blog;


  return (
    <Layout>
    <div>
      <h1>My blog posts</h1>

      {posts.map(post => (
        <Link  to={post.fields.slug} >
          <article key={post.id}>
            <h2>{post.frontmatter.title}</h2>
            <small>{post.frontmatter.author}, {post.frontmatter.date}</small>
            <p>{post.excerpt}</p>
          </article>
        </Link>
      ))}
    </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark {
      posts: nodes {
        fields {
          slug
        }
        frontmatter {
          date(fromNow: true)
          title
          author
        }
        excerpt
        id
      }
    }
  }
`