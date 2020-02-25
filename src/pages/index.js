import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GenreChange from "../components/genres/genre.api"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <GenreChange />
  </Layout>
)

export default IndexPage
