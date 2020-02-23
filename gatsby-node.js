exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allCustomApi {
        edges {
          node {
            anime {
              url
              title
            }
          }
        }
      }
    }
  `)

  const weebs = result.data.allCustomApi.edges

  weebs.forEach(({ node: anime }) => {
    const title = anime.title
    const url = anime.url
    actions.createPage({
      path: `/${title}`,
      component: require.resolve("./src/templates/genre.template.js"),
      context: { url },
    })
  })
}
