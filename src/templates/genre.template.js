import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
// import ProjectPreview from "../components/project-preview"

const GenreTemplate = () => {
  const data = useStaticQuery(graphql`
    query genreTemplateQuery {
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
  const projects = data.allCustomApi.edges

  return (
    <Layout>
      <section className="archive">
        {projects.map(({ node: anime }) => {
          const yeetus = anime.anime
          return (
            <ul>
              {yeetus.map(t => (
                <li>{t.title}</li>
              ))}
            </ul>
          )
        })}
      </section>
    </Layout>
  )
}

export default GenreTemplate
