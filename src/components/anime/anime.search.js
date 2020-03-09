import React, { useState, useEffect } from "react"
import TextField from "@material-ui/core/TextField"
import { makeStyles } from "@material-ui/core/styles"
import Flippy, { FrontSide, BackSide } from "react-flippy"
import Image from "../image"

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
  const [url, setUrl] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setAnimeData(data))
  }, [currentPage, url])

  const changeHandler = event => {
    setSearchedAnime(event.target.value)
    setUrl(
      `https://api.jikan.moe/v3/search/anime?q=${event.target.value}&page=${currentPage}`
    )
  }

  const next = () => {
    setCurrentPage(currentPage + 1)
  }

  return (
    <section className="search">
      <div className="search--input">
        <form className={classes.root} autoComplete="off">
          <TextField
            className={classes.margin}
            onChange={changeHandler}
            InputLabelProps={{
              style: {
                color: "white",
              },
            }}
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
        </form>
        <button onClick={next}>N</button>
      </div>
      <ul className="search--list">
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
                    </>
                  </BackSide>
                </Flippy>
              </li>
            )
          )
        )}
      </ul>
    </section>
  )
}

export default AnimeSearch
