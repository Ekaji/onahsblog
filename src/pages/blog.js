import React from "react"
import { graphql, Link } from "gatsby"
import Footer from '../components/layout/Footer'
import "normalize.css"
import '../styles/blog.styles.css'
// import mrcp from 'material-random-color-picker'


export default function Blog({ data }) {
  const { posts } = data.blog;
  let allTags = posts.map(post => post.frontmatter.tags )
  let uniqueTags = [...new Set(allTags)]
  console.log(uniqueTags)

  return (
    <div className='blog'>
      <div className='blog__container' > 
      <h1 className='blog__heading'>Onahs Blog</h1>
      <h2 className='blog__articles'>Articles</h2>
     <div className='blog__articles--grid'>

      {posts.map(post => (
        <Link  to={post.fields.slug} >
          <article className='post' key={post.id}>
            <h2 className='post__title'>{post.frontmatter.title}</h2>
            <h4 className='post__tags'>{post.frontmatter.tags}</h4>
            <p>{post.excerpt}</p>
            <small className='post__details'>{post.frontmatter.author}, {post.frontmatter.date}</small>
          </article>
        </Link>
          )
        )
      }
     </div>

     <aside className='tags'>
        <h3 className='tags__heading'>Tags</h3>
        <ul className='taglist' >
                {uniqueTags.map((uniquetag, i) => (
                  <li key={i}  
                  //  style={
                  //   {
                  //     listStyleType: 'none',
                  //     backgroundColor: mrcp(),
                  //     borderRadius: '3px',
                  //     padding: '5px 10px',
                  //     // ?
                  //     minWidth: '50px',
                  //     width: '80%',

                  //   }
                  // }
                  >
                    <Link className='taglist__link--color'  to={`/tags/${uniquetag}`}>
                      {uniquetag}
                    </Link>
                  </li>
              )
            )
          }
        </ul>
      </aside>
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