// import React, { useState, useEffect } from "react"

// const Genres = () => {
//   const [genre, setGenre] = useState(1)
//   const newGenre = async () => {
//     const response = await fetch(
//       `https://api.jikan.moe/v3/genre/anime/${genre}/1`
//     )
//     const data = await response.json()
//     setGenre(data)
//     console.log(data)
//   }
//   useEffect(() => {
//     newGenre()
//   }, [])

//   const genreName = { ...genre.mal_url }
//   console.log(genreName)
//   return (
//     <div>
//       <h1>{genreName.name}</h1>
//       <select>
//         <option value="1">One</option>
//         <option value="2">Two</option>
//         <option value="3">Three</option>
//       </select>
//     </div>
//   )
// }

// export default Genres
