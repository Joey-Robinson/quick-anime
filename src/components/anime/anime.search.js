import React, { useState } from "react"
import TextField from "@material-ui/core/TextField"
import { makeStyles } from "@material-ui/core/styles"
import Flippy, { FrontSide, BackSide } from "react-flippy"
import Image from "../image"
import NextButton from "../genres/genre-buttons/next.button"
import PreviousButton from "../genres/genre-buttons/previous.button"

// ! Check to see if a label is needed for <TextField />

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: ".5em",
    input: {
      color: "white",
    },
    "& > *": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}))

const AnimeSearch = () => {
  const classes = useStyles()
  const [animeData, setAnimeData] = useState({ results: [] })
  const [searchedAnime, setSearchedAnime] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

  const searchCall = async () => {
    const response = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${searchedAnime}&page=${currentPage}`
    )
    const data = await response.json()
    setAnimeData(data)
  }

  const onChangeHandler = event => {
    setSearchedAnime(event.target.value)
  }

  const nextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  const previousPage = () => {
    setCurrentPage(currentPage - 1)
  }

  const onSubmitHandler = event => {
    if (event.key === 13) {
      event.preventDefault()
      searchCall()
    } else {
      event.preventDefault()
      searchCall()
    }
  }

  return (
    <section className="search">
      <div className="search--input">
        <form
          className={classes.root}
          onSubmit={onSubmitHandler}
          autoComplete="off"
          noValidate
        >
          {animeData.results.length === 0 || currentPage === 1 ? (
            ""
          ) : (
            <PreviousButton
              onClick={previousPage}
              className="search--input__previous"
              message="Previous Page"
            />
          )}
          <br />
          <TextField
            autoFocus="true"
            value={searchedAnime}
            className={classes.margin}
            onChange={onChangeHandler}
            InputLabelProps={{
              style: {
                color: "white",
              },
            }}
            aria-label="Search For Anime"
            id="anime-search"
            label="Search Anime"
            variant="filled"
            color="secondary"
            InputProps={{
              style: {
                color: "white",
              },
            }}
          />
          <br />
          <button className="search--input__submit" value="Search For Anime">
            Search For Anime
          </button>
          <br />
          {animeData.results.length === 0 ? (
            ""
          ) : (
            <NextButton onClick={nextPage} className="search--input__next" />
          )}
        </form>
      </div>
      {/* <ul className="search--list">
        {animeData.results.length === 0 ? (
          <div
            style={{
              borderLeft: "none",
              borderRight: "none",
              borderTop: "none",
              border: "none",
            }}
            className="search--list__empty"
          >
            <p
              style={{
                borderLeft: "none",
                borderRight: "none",
                borderTop: "none",
              }}
            >
              Protect Nezuko by Searching for Anime
            </p>
            <Image style={{ border: "none", outline: "none" }} />
          </div>
        ) : (
          animeData.results.map(
            ({ synopsis, mal_id, title, image_url, url }) => (
              <li key={mal_id}>
                <Flippy
                  flipOnHover={true}
                  flipOnClick={false}
                  flipDirection="horizontal"
                  style={{ width: "225px", height: "335px" }}
                >
                  <FrontSide>
                    <div
                      className="search--list__back"
                      style={{ maxWidth: "225px", maxHeight: "335px" }}
                    >
                      <h5 style={{ textAlign: "center" }}>{title}</h5>
                      <>
                        <img src={image_url} alt={title} />
                      </>
                    </div>
                  </FrontSide>
                  <BackSide
                    style={{
                      background: "#333333",
                      color: "white",
                    }}
                  >
                    <>
                      <h5 style={{ textAlign: "center", color: "white" }}>
                        {title}
                      </h5>
                      <p
                        className="search--synopsis"
                        style={{ padding: "10px 15px" }}
                      >
                        {synopsis}
                      </p>
                      <div style={{ textAlign: "center" }}>
                        <a
                          style={{ color: "#f50057" }}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View on MAL
                        </a>
                      </div>
                    </>
                  </BackSide>
                </Flippy>
              </li>
            )
          )
        )}
      </ul> */}
    </section>
  )
}

export default AnimeSearch
