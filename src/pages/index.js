import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import AnimeApi from "../components/api/anime.api"
import Genres from "../components/genres/genre.api"
import GenrePreview from "../components/genres/genre.preview"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <GenrePreview />
  </Layout>
)

export default IndexPage
