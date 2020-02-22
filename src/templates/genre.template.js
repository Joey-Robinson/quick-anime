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
    }
  }
`

const GenreTemplate = ({ data }) => {
  const project = data.genresJson
  const link = project.url
  const slug = project.slug
  const genre = project.genre
  return (
    <Layout>
      <SEO />
      <GenreLayout key={genre} link={link} genre={genre} slug={slug} />
    </Layout>
  )
}

export default GenreTemplate
