import React, { useState, useEffect } from "react"
import TextField from "@material-ui/core/TextField"
import { makeStyles } from "@material-ui/core/styles"
import Flippy, { FrontSide, BackSide } from "react-flippy"

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: ".5em",
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

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setAnimeData(data))
  }, [url])

  const changeHandler = event => {
    setSearchedAnime(event.target.value)
    setUrl(`https://api.jikan.moe/v3/search/anime?q=${event.target.value}`)
  }

  return (
    <section className="search">
      <div className="search--input">
        <form className={classes.root} autoComplete="off">
          <TextField
            className={classes.margin}
            onChange={changeHandler}
            id="anime-search"
            label="Search Anime"
            variant="filled"
            color="secondary"
          />
        </form>
      </div>
      <ul className="search--list">
        {animeData.results.length === 0
          ? "Search..."
          : animeData.results.map(
              ({ synopsis, mal_id, title, image_url, url }) => (
                <li key={mal_id}>
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
              )
            )}
      </ul>
    </section>
  )
}

export default AnimeSearch
