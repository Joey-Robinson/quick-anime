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
  // const projects = data.allGenresJson.edges
  // const newValue = () => {
  //   projects.map(({ node: link }) => console.log(link.url))
  // }
  // console.log(projects.map(({ node: u }) => u.url))
  return (
    <Layout>
      <SEO title="Genres" />
      <section className="genre">
        <div>
          <label>Pick an anime</label>
          <br />
          <select>
            {projects.map(({ node: yeet }) => {
              const slug = yeet.slug
              const link = yeet.url
              const genre = yeet.genre

              return (
                <>
                  <GenrePreview key={slug} url={link} genre={genre} />
                </>
              )
            })}
          </select>
        </div>
      </section>
    </Layout>
  )
}

export default Genres
