// exports.createPages = async ({ actions, graphql, reporter }) => {
//   const result = await graphql(`
//     {
//       allCustomApi {
//         edges {
//           node {
//             anime {
//               url
//               title
//             }
//           }
//         }
//       }
//     }
//   `)

//   const action = result.data.allCustomApi.edges
//   const adventure = result.data.allCustomApi.edges

//   action.forEach(({ node: anime }) => {
//     const title = anime.title
//     const url = anime.url
//     actions.createPage({
//       path: `/`,
//       component: require.resolve("./src/templates/action.template.js"),
//     })
//   })

//   adventure.forEach(({ node: anime }) => {
//     const title = anime.title
//     const url = anime.url
//     actions.createPage({
//       path: `/`,
//       component: require.resolve("./src/templates/adventure.template.js"),
//     })
//   })
// }
