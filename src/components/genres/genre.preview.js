import React, { useState, useEffect } from "react"

const GenrePreview = ({ url, genre }) => {
  // const [updateGenre, setUpdateGenre] = useState(1)
  // const newGenre = async () => {
  //   const response = await fetch(
  //     `https://api.jikan.moe/v3/genre/anime/${url}/1`
  //   )
  //   const data = await response.json()
  //   setUpdateGenre(data)
  //   console.log(data)
  // }
  // const onChangeHandler = event => {
  //   setUpdateGenre(event.target.value)
  // }
  // useEffect(() => {
  //   newGenre()
  // }, [])

  return (
    <option defaultValue={1} key={url} value={genre}>
      {genre}
    </option>
  )
}

export default GenrePreview
