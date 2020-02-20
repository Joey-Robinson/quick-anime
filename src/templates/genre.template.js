import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GenreLayout from "../components/genres/genre.layout"

export const query = graphql`
  query($slug: String!) {
    genresJson(slug: { eq: $slug }) {
      url
      genre
      slug
      value
      pages
    }
  }
`

const GenreTemplate = ({ data }) => {
  const project = data.genresJson
  const url = project.title
  const genre = project.genre

  return (
    <Layout>
      <SEO />
      <GenreLayout genre={genre} />
    </Layout>
  )
}

export default GenreTemplate
