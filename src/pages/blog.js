import React from "react"
import { graphql, Link } from "gatsby"
import Layout from '../components/layout/Layout'
import '../styles/blog.styles.css'
import mrcp from 'material-random-color-picker'
import Img from "gatsby-image"



export default function Blog({ data }) {
  const { posts } = data.blog;
  let allTags = posts.map(post => post.frontmatter.tags )
  let uniqueTags = [...new Set(allTags)]
  
  return (
<Layout>
  <div className='blog'>
      <div className='blog__container' >
      <div className='blog__head'>
        <h1 className='blog__heading'>Onahs Blog</h1>
        <h2 className='blog__articles'>Articles</h2>
      </div>
      
     <div className='blog__articles--grid'>
      {posts.map(post => (
          <Link className='link--color' to={post.fields.slug} >
          <article className='post' key={post.id}>
          <Img style={{height: '150px'}} fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />
              <h2 className='post__title'>{post.frontmatter.title}</h2>
              <h4 style={{display:'inline-block', backgroundColor: mrcp({color: 'blue', type: 'darken'}), color: 'white', borderRadius: '3px', padding: '7px 12px', margin: '30px 10px 10px'}}>{post.frontmatter.tags}</h4>
              {/* <p className='post__excerpt'>{post.excerpt}</p> */}
              <small className='post__details'>{post.frontmatter.author}, {post.frontmatter.date}</small>
          </article>
          </Link>

          )
        )
      }
     </div>

     <aside className='tag'>
        <h3 className='tag__heading'>Tags</h3>
                {uniqueTags.map((uniquetag, i) => (
                  <div className='taglist' key={i}  
                   style={
                    {
                      listStyleType: 'none',
                      backgroundColor: mrcp(),
                      borderRadius: '3px',
                      padding: '7px 12px',
                    }
                  }
                  >
                    <Link className='link--color' key={i} to={`/tags/${uniquetag}`}>
                      {uniquetag}
                    </Link>
                  </div>
              )
            )
          }
      </aside>
     </div>
    </div>
    </Layout> 
  )
}

export const pageQuery = graphql`
  query MyQuery {
    file(relativePath: { eq: "images/corgi.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
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
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
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