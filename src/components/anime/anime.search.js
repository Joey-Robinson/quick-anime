import React, { useState } from "react"
import TextField from "@material-ui/core/TextField"
import { makeStyles } from "@material-ui/core/styles"
import Flippy, { FrontSide, BackSide } from "react-flippy"
// import Image from "../image"

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
    setCurrentPage(1)
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
          className={`${classes.root} field`}
          onSubmit={onSubmitHandler}
          autoComplete="off"
          noValidate
        >
          <TextField
            value={searchedAnime}
            className={`${classes.margin} field--input`}
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
          <button
            className="search--input__submit field--submit"
            value="Search For Anime"
          >
            Search For Anime
          </button>
          {/* Fix This */}
          {animeData.results === 0 || currentPage < 1 ? (
            ""
          ) : (
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              className="field--previous btns ripple"
            >
              <span style={{ fontSize: "20px" }}>&larr;</span>
              Previous Page
            </button>
          )}
          <button onClick={nextPage} className="field--next btns ripple">
            Next Page &nbsp;&nbsp;{" "}
            <span style={{ fontSize: "20px" }}>&rarr;</span>
          </button>
        </form>
      </div>
      <ul className="search--list">
        {animeData.results.map(
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
        )}
      </ul>
    </section>
  )
}

export default AnimeSearch
