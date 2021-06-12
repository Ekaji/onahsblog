const path = require("path")
const _ = require("lodash")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
      createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
//
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  //
  const blogListTemplate = path.resolve(`./src/templates/blog-list.js`)
//
  const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`)
  const tagTemplate = path.resolve(`./src/templates/tags.js`)


  const result = await graphql(`
  query loadSlugQuery ($limit: Int!){
      postsRemark: allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC  }
        limit: $limit
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              tags
              title
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
   `,
    { limit: 2000}).then(result => {
    // const posts = result.data.allMarkdownRemark.edges
    const posts = result.data.postsRemark.edges

    posts.forEach((post, index, ) => {
        // create prev and next on each posts render (for Blog Post Pagination, BPP)
        const previous = index === posts.length - 1 ? null : posts[index + 1].node
        const next = index === 0 ? null : posts[index - 1].node

        // previous and next are objects props sent as pageContect object to blogPostTemplate
        createPage({
            path: post.node.fields.slug,
            component: blogPostTemplate,
            context: {
                slug: post.node.fields.slug,
                previous,
                next,
            },
        })
    })


       // Create blog list pages (for Blog List Pagination, BLP)
        // Assign path /2, /3, p/4, etc
        const postsPerPage = 6
        const numPages = Math.ceil(posts.length / postsPerPage)

        Array.from({ length: numPages }).forEach((_, i) => {
            createPage({
                path: i === 0 ? `/` : `${i + 1}`,
                component: blogListTemplate,
                context: {
                    limit: postsPerPage,
                    skip: i * postsPerPage,
                    numPages,
                    currentPage: i + 1
                },
            });
        });


          // here

  

  // handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }


  // Extract tag data from query
  const tags = result.data.tagsGroup.group

  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })


    })


}