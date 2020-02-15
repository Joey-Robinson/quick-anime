import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AnimeApi from "../components/api/anime.api"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <AnimeApi />
  </Layout>
)

export default IndexPage
