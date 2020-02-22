import React from "react"
import { Link } from "gatsby"

const GenrePreview = ({ genre }) => (
  <li key={genre}>
    <Link to={`/${genre}/`}>{genre}</Link>
  </li>
)

export default GenrePreview
