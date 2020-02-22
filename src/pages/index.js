import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import AnimeApi from "../components/api/anime.api"
import Genres from "../components/genres/genre.api"
import GenrePreview from "../components/genres/genre.preview"

const IndexPage = async () => {
  // const response = await fetch("https://api.jikan.moe/v3/genre/anime/1/1")
  // const data = await response.json()
  // console.log(data)
  // const nameOf = data.mal_url.name
  // console.log(nameOf)
  return (
    <Layout>
      <SEO title="Home" />
      <GenrePreview />
    </Layout>
  )
}

export default IndexPage
