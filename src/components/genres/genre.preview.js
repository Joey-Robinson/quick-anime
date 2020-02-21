import React from "react"
import { Link } from "gatsby"

const GenrePreview = ({ genre, slug }) => (
  <li>
    <Link to={`/${genre}/`}>{genre}</Link>
  </li>
)

export default GenrePreview
