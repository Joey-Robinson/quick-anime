exports.onCreatePage = async ({ page, actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              path
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
    const title = node.frontmatter.path
    actions.createPage({
      path: `${title}`,
      component: require.resolve("./src/templates/newsletter.template.js"),
    })
  })

  const { createPage } = actions
  if (page.path.match(/^\/anime/)) {
    page.matchPath = "/anime/*"
    createPage(page)
  }
}
