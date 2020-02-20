import React from "react"

const GenrePreview = ({ url, genre }) => (
  <option defaultValue={1} key={url} value={genre}>
    {genre}
  </option>
)

export default GenrePreview
