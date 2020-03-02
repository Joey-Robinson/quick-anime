import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Genres from "../components/routes/genres"

const Anime = () => (
  <Layout>
    <SEO title="Anime" />
    <Router basepath="/anime">
      <Genres path="/genres" />
    </Router>
    <section className="anime"></section>
  </Layout>
)

export default Anime
