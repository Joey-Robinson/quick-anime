import React from "react"

const ExternalLink = ({ path, message }) => (
  <a target="_blank" rel="noopener noreferrer" href={`${path}`}>
    {message}
  </a>
)

export default ExternalLink
