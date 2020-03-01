import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link as GatsbyLink } from "gatsby"

const Anime = () => (
  <Layout>
    <SEO title="Anime" />
    <section className="ani">
      <h1>From Anime</h1>
      <GatsbyLink to="/anime/search/">Search Anime</GatsbyLink>
    </section>
  </Layout>
)

export default Anime
