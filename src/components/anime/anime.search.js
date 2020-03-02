import React, { useState, useEffect } from "react"

const GenreSearch = () => {
  const [genreQuery, setGenreQuery] = useState({ anime: [] })
  const [genreNumber, setGenreNumber] = useState(1)
  const [genrePage, setGenrePage] = useState(1)

  useEffect(() => {
    fetch(
      `https://api.jikan.moe/v3/search/anime?genre=${genreNumber}&page=${genrePage}`
    )
      .then(response => response.json())
      .then(data => setGenreQuery(data))
  }, [genreNumber, genrePage])

  return (
    <div>
      <h1>From Anime Search</h1>
    </div>
  )
}

export default GenreSearch
