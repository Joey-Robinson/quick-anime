import React, { useState, useEffect } from "react"
import GenreList from "./genre.list"
import GenrePage from "./genre.page"
import Spinner from "../spinner"
import PreviousButton from "./genre-buttons/previous.button"
import NextButton from "./genre-buttons/next.button"

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
    setGenreValue(event.target.value)
  }

  useEffect(() => {
    fetch(`https://api.jikan.moe/v3/genre/anime/${genreValue}/${initialPage}`)
      .then(response => response.json())
      .then(data => setSelectedGenre(data))
    setIsLoading(true)
  }, [genreValue, initialPage])

  return (
    <section className="genre">
      <h1>From Genres</h1>
      <GenrePage className="genre--current" current={initialPage} />
      <PreviousButton className="previous" onClick={previousPage} />
      <NextButton className="next" onClick={nextPage} />
      {/* <GenreButton className="previous" onClick={previousPage}>
        <ArrowBackIcon /> Previous
      </GenreButton>
      <GenreButton
        className="next"
        icon={<ArrowForwardIcon />}
        onClick={nextPage}
      >
        Next
      </GenreButton> */}
      <GenreList
        className="genre--select"
        defaultValue={selectedGenre}
        handler={changeHandler}
      />
      <ul className="genre--list">
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
