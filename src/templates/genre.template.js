import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
// import ProjectPreview from "../components/project-preview"

const GenreTemplate = () => {
  const data = useStaticQuery(graphql`
    query genreTemplateQuery {
      customApi {
        anime {
          title
          url
        }
      }
    }
  `)
  const projects = data.customApi.anime
  console.log(projects.anime)

  return (
    <Layout>
      <section className="archive">
        <ul>
          {projects.map(({ title: title, url: url }) => (
            <li key={title}>
              <a href={url} target="_blank" rel="noopner norferrer">
                {title}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export default GenreTemplate
