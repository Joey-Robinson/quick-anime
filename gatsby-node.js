exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  if (page.path.match(/^\/anime/)) {
    page.matchPath = "/anime/*"
    createPage(page)
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              slug
              title
              date
              author
            }
          }
        }
      }
    }
  `)
  const blogs = result.data.allMarkdownRemark.edges

  blogs.forEach(({ node }) => {
    const slug = node.frontmatter.slug
    actions.createPage({
      path: `/${slug}/`,
      component: require.resolve("./src/templates/newsletter.template.js"),
    })
  })
}
