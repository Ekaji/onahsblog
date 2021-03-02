import React, {useState} from "react"
import { graphql, Link } from "gatsby"
import Layout from '../components/layout/Layout'
import '../styles/blog.styles.css'
import mrcp from 'material-random-color-picker'
// import Img from "gatsby-image"



export default function Blog({ data }) {
  const { posts } = data.blog;
  let allTags = posts.map(post => post.frontmatter.tags )
  let uniqueTags = [...new Set(allTags)]

  const postCount = 5
  const [postsToShow, setPostsToShow] = useState(postCount)
  const [blogList, setBloglist] = useState(posts.slice(0, postsToShow))

  const handleLoadMorePosts = () => {
    setPostsToShow( postsToShow + postCount)
    setBloglist([...posts.slice(0, postsToShow) ])
  }

  
  return (
<Layout>
  <div className='blog'>
      <div className='blog__container' >
      <div className='blog__head'>
        <h1 className='blog__heading'>Onahs Blog</h1>
        <h2 className='blog__articles'>Articles</h2>
      </div>
      
     <div className='blog__articles--grid'>
      {blogList.map(post => (
          <article className='post' key={post.id}>
          <Link className='link--color' key={post.id} to={post.fields.slug} >
              <h2 className='post__title'>{post.frontmatter.title}</h2>
              <div className='post__info'>
                <Link to={`/tags/${post.frontmatter.tags}`}>
                  <h4 style={{display:'inline-block', backgroundColor: mrcp({color: 'blue', type: 'darken'}), color: 'white', borderRadius: '3px', padding: '7px 12px', margin: '30px 10px 10px'}}>{post.frontmatter.tags}
                  </h4>
                </Link>
                {post.frontmatter.date}
              </div>
          </Link>
          </article>
          /* <p className='post__excerpt'>{post.excerpt}</p> */
          /* <small className='post__details'>{post.frontmatter.author} </small> */
          /* <Img style={{height: '150px'}} fluid={post.frontmatter.featuredImage.childImageSharp.fluid} /> */
          )
        )
      } 
     </div>

     <div style={{textAlign: 'center', margin: 'auto'}} >
      <button   onClick={ handleLoadMorePosts }>loadMore</button>
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
          date(fromNow: true, formatString: "DD MMMM, YYYY")
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
