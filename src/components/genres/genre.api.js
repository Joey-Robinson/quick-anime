import React, { useState, useEffect } from "react"
import GenreList from "./genre.list"
import GenreButton from "./genre.button"
import GenrePage from "./genre.page"
import Spinner from "../spinner"

const GenreChange = () => {
  const [selectedGenre, setSelectedGenre] = useState({ anime: [] })
  const [isLoading, setIsLoading] = useState(false)
  const [genreValue, setGenreValue] = useState(1)
  const [initialPage, setInitialPage] = useState(1)

  const nextPage = () => {
    setInitialPage(initialPage + 1)
  }

  const previousPage = () => {
    setInitialPage(initialPage - 1)
  }

  const changeHandler = event => {
    // Need to implement this so the <Spinner /> works when changing genres.
    setGenreValue(event.target.value, setSelectedGenre({ anime: [] }))
  }

  useEffect(() => {
    fetch(`https://api.jikan.moe/v3/genre/anime/${genreValue}/${initialPage}`)
      .then(response => response.json())
      .then(data => setSelectedGenre(data))
    setIsLoading(true)
  }, [genreValue, initialPage])

  return (
    <section>
      <h1>From Genres</h1>
      <GenrePage current={initialPage} />
      <GenreButton message="Previous Page" onClick={previousPage} />
      <GenreButton message="Next Page" onClick={nextPage} />
      {!isLoading ? (
        <Spinner />
      ) : (
        <GenreList defaultValue={selectedGenre} handler={changeHandler} />
      )}
      <ul className="genre">
        {!isLoading ? (
          <li>
            <Spinner />{" "}
          </li>
        ) : (
          <>
            {selectedGenre.anime.map(({ title, url, image_url }) => (
              <li key={title}>
                <p>{title}</p>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <img src={image_url} alt={title} />
                </a>
              </li>
            ))}
          </>
        )}
      </ul>
    </section>
  )
}

export default GenreChange
