exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allGenresJson {
        edges {
          node {
            genre
            slug
          }
        }
      }
    }
  `)

  const projects = result.data.allGenresJson.edges

  projects.forEach(({ node: project }) => {
    const slug = project.slug
    actions.createPage({
      path: `/${slug}`,
      component: require.resolve("./src/templates/genre.template.js"),
      context: { slug },
    })
  })
}
