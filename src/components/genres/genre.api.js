import React, { useState, useEffect } from "react"
import GenreSelect from "./genre.select"
import GenrePage from "./genre.page"
import Spinner from "../spinner"
import PreviousButton from "./genre-buttons/previous.button"
import NextButton from "./genre-buttons/next.button"
import Flippy, { FrontSide, BackSide } from "react-flippy"

const GenreChange = () => {
  const [selectedGenre, setSelectedGenre] = useState({ anime: [] })
  const [isLoading, setIsLoading] = useState(false)
  const [genreValue, setGenreValue] = useState(1)
  const [initialPage, setInitialPage] = useState(1)
  const [hideButton, setHideButton] = useState(false)

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
    setIsLoading(true)
  }, [genreValue, initialPage])

  return (
    <section className="genre">
      <h1>From Genres</h1>
      <GenrePage className="genre--current" current={initialPage} />
      {/* <PreviousButton className="previous" onClick={previousPage} />
      <NextButton className="next" onClick={nextPage} /> */}
      <GenreSelect
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
            {selectedGenre.anime.map(({ title, url, image_url, synopsis }) => (
              <li key={title}>
                <Flippy
                  flipOnHover={true} // default false
                  flipOnClick={false} // default false
                  flipDirection="horizontal" // horizontal or vertical
                  style={{ width: "225px", height: "335px" }} /// these are optional style, it is not necessary
                >
                  <FrontSide>
                    <div>
                      <h2 style={{ textAlign: "center" }}>{title}</h2>
                      <a href={url} target="_blank" rel="noopener noreferrer">
                        <img src={image_url} alt={title} />
                      </a>
                    </div>
                  </FrontSide>
                  <BackSide style={{ background: "white", color: "black" }}>
                    <h2 style={{ textAlign: "center" }}>{title}</h2>
                    <p>{synopsis}</p>
                  </BackSide>
                </Flippy>
              </li>
            ))}
          </>
        )}
      </ul>
    </section>
  )
}

export default GenreChange
