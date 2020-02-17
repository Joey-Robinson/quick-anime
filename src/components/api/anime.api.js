import React, { useState, useEffect } from "react"
import AnimeLayout from "./anime.layout"

const AnimeApi = () => {
  const [anime, setAnime] = useState([])
  const weebs = async () => {
    const response = await fetch("https://api.jikan.moe/v3/anime/1")
    const data = await response.json()
    setAnime(data)
    console.log(data)
  }
  useEffect(() => {
    weebs()
  }, [])

  const genres = { ...anime.genres }
  const aniGenres = []
  for (let [key, value] of Object.entries(genres)) {
    // prettier-ignore
    const names = <span key={key} className="comma">{" "}{value.name}</span>
    aniGenres.push(names)
  }

  return (
    <AnimeLayout
      title={anime.title}
      image={anime.image_url}
      synopsis={anime.synopsis}
      background={anime.background}
      episodes={anime.episodes}
      genres={aniGenres}
    />
  )
}

export default AnimeApi
