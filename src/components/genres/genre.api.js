import React, { useState, useEffect } from "react"
import GenreList from "./genre.list"
import GenreButton from "./genre.button"
import GenrePage from "./genre.page"

const GenreChange = () => {
  const [selectedGenre, setSelectedGenre] = useState({ anime: [] })
  const [genreValue, setGenreValue] = useState(1)
  const [initialPage, setInitialPage] = useState(1)

  const nextPage = () => {
    setInitialPage(initialPage + 1)
  }

  const previousPage = () => {
    setInitialPage(initialPage - 1)
  }

  const changeHandler = event => {
    setGenreValue(event.target.value)
  }

  useEffect(() => {
    fetch(`https://api.jikan.moe/v3/genre/anime/${genreValue}/${initialPage}`)
      .then(response => response.json())
      .then(data => setSelectedGenre(data))
  }, [genreValue, initialPage])

  return (
    <main>
      <h1>From Genres</h1>
      <GenrePage current={initialPage} />
      <GenreButton message="Previous Page" onClick={previousPage} />
      <GenreButton message="Next Page" onClick={nextPage} />
      <GenreList defaultValue={selectedGenre} handler={changeHandler} />
      <ul className="genre">
        {selectedGenre.anime.map(({ title, url, image_url }) => (
          <li key={title}>
            <p>{title}</p>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <img src={image_url} alt={title} />
            </a>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default GenreChange
