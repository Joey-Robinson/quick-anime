import React from "react"
import { Link as GatsbyLink } from "gatsby"

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <GatsbyLink to="/">Home</GatsbyLink>
      </li>
      <li>
        <GatsbyLink to="/newsletter/">Newsletter</GatsbyLink>
      </li>
      <li>
        <GatsbyLink to="/contact/">Contact</GatsbyLink>
      </li>
      <li>
        <GatsbyLink to="/anime/">Anime</GatsbyLink>
      </li>
      <li>
        <GatsbyLink to="/anime/genres">Anime Genres</GatsbyLink>
      </li>
      <li>
        <GatsbyLink to="/anime/search">Anime Search</GatsbyLink>
      </li>
    </ul>
  </nav>
)

export default Navigation
