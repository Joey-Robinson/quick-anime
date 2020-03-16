import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Genres from "../components/routes/genres"
import Search from "../components/routes/search"

const Anime = () => (
  <Layout>
    <SEO title="Anime" />
    <Router basepath="/anime">
      <Genres path="/genres/" />
      <Search path="/search/" />
    </Router>
    <section>
      <h1>From Anime</h1>
    </section>
  </Layout>
)

export default Anime
