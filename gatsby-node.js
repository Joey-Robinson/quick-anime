exports.onCreatePage = ({ page, actions }) => {
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
            id
            frontmatter {
              slug
              category
              link
            }
          }
        }
      }
    }
  `)
  const blogs = result.data.allMarkdownRemark.edges

  blogs.forEach(({ node }) => {
    const slug = node.frontmatter.slug
    const category = node.frontmatter.category
    actions.createPage({
      path: `/${category}/${slug}`,
      component: require.resolve("./src/templates/newsletter.template.js"),
      context: {
        id: node.id,
        slug,
        category,
      },
    })
  })
}
