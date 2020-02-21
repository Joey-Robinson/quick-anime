import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GenrePreview from "../components/genres/genre.preview"

const Genres = () => {
  const data = useStaticQuery(graphql`
    {
      allGenresJson {
        edges {
          node {
            slug
            url
            genre
          }
        }
      }
    }
  `)

  const projects = data.allGenresJson.edges

  return (
    <Layout>
      <SEO title="Genres" />
      <section className="genre">
        <div>
          <label>Pick an anime</label>
          <br />
          <ul>
            {projects.map(({ node: yeet }) => {
              const { slug, link, genre } = yeet

              return (
                <>
                  <GenrePreview
                    link={slug}
                    key={genre}
                    url={link}
                    genre={genre}
                  />
                </>
              )
            })}
          </ul>
        </div>
      </section>
    </Layout>
  )
}

export default Genres
