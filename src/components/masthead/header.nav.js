import React from "react"
import { Link as GatsbyLink } from "gatsby"

const Navigation = () => {
  return (
    <div>
      <GatsbyLink to="/">Home</GatsbyLink>

      <GatsbyLink to="/newsletter/">Newsletter</GatsbyLink>

      <GatsbyLink to="/contact/">Contact</GatsbyLink>

      <GatsbyLink to="/anime/">Anime</GatsbyLink>

      <GatsbyLink to="/anime/genres">Anime Genres</GatsbyLink>

      <GatsbyLink to="/anime/search">Anime Search</GatsbyLink>
    </div>
  )
}

export default Navigation
