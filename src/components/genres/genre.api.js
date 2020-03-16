import React, { useState, useEffect } from "react"
import GenreSelect from "./genre.select"
import Spinner from "../spinner"
// import GenrePage from "./genre.page"
import Flippy, { FrontSide, BackSide } from "react-flippy"

const GenreChange = () => {
  const [selectedGenre, setSelectedGenre] = useState({ anime: [] })
  const [isLoading, setIsLoading] = useState(false)
  const [genreValue, setGenreValue] = useState(1)
  const [initialPage, setInitialPage] = useState(1)

  // const nextPage = () => {
  //   setInitialPage(initialPage + 1)
  // }

  // const previousPage = () => {
  //   setInitialPage(initialPage - 1)
  // }

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
      {/* <GenrePage className="genre--current" current={initialPage} /> */}
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
                  flipOnHover={true}
                  flipOnClick={false}
                  flipDirection="horizontal"
                  style={{ width: "225px", height: "335px" }}
                >
                  <FrontSide>
                    <div style={{ maxWidth: "225px", maxHeight: "335px" }}>
                      <h5 style={{ textAlign: "center" }}>{title}</h5>
                      <a href={url} title="_blank" rel="noopener noreferrer">
                        <img src={image_url} alt={title} />
                      </a>
                    </div>
                  </FrontSide>
                  <BackSide
                    style={{
                      background: "#333333",
                      color: "white",
                    }}
                  >
                    <div>
                      <h5 style={{ textAlign: "center", color: "white" }}>
                        {title}
                      </h5>
                      <p style={{ padding: "10px 15px" }}>{synopsis}</p>
                    </div>
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
