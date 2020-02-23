import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GenreTemplate from "../templates/genre.template"

const Genres = () => (
  <Layout>
    <SEO title="Genres" />
    <section>
      <Link to={<GenreTemplate />}>Action Anime</Link>
    </section>
  </Layout>
)

export default Genres
