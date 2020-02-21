import React from "react"
import InternalLink from "../links/link.internal"

const GenreLayout = ({ image, link, genre, slug }) => (
  <ul key={slug}>
    <InternalLink path={`/genres/`} message="Back to Genres" />
    <h1>{genre}</h1>
    <InternalLink path={`/${slug}/`} message={`/${slug}`} />
    <li>
      <a href={link} target="_blank" rel="noopener noreferrer">
        View Online
      </a>
    </li>
    <li>
      <img src={image} alt={slug} />
    </li>
  </ul>
)

export default GenreLayout
