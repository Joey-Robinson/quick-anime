import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GenrePreview from "../components/genres/genre.preview"

const Genres = () => {
  const data = useStaticQuery(graphql`
    {
      allGenresJson {
        edges {
          node {
            slug
            url
            genre
          }
        }
      }
      genresJson {
        url
        genre
        value
        pages
      }
    }
  `)
  // const Genres = () => {
  //   const [selectedAnime, setSelectedAnime] = useState(/* default value */)

  //   useEffect(() => {
  //     // make a query with the selected anime
  //   }, [selectedAnime])

  //   const handleSelect = e => {
  //     setSelectedAnime(e.target.value)
  //   }

  //   return (
  // <select value={selectedAnime} onChange={handleSelect}>
  //   {projects.map(({ node: yeet }) => {
  //     const { slug, link, genre, url, value, pages } = yeet
  //     return (
  //       <option key={slug} value={url + value + pages}>{slug} {genre}</option>
  //     )
  //   })}
  // </select>
  //   )
  // }
  const projects = data.allGenresJson.edges

  const u = data.genresJson.url
  const v = data.genresJson.value
  const p = data.genresJson.pages

  const [selectGenre, setSelectGenre] = useState(1)
  useEffect(() => {
    fetch(`${u}` + `${v}/` + p)
      .then(response => response.json())
      .then(pop => console.log(pop))
  }, [selectGenre])

  const handleSelect = e => {
    setSelectGenre(e.target.value)
  }

  return (
    <Layout>
      <SEO title="Genres" />
      <section className="genre">
        <div>
          <label>Pick an anime</label>
          <br />
          <select value={selectGenre} onChange={handleSelect}>
            {projects.map(({ node: yeet }) => {
              const { slug, link, genre } = yeet

              return (
                <>
                  <GenrePreview key={slug} url={link} genre={genre} />
                </>
              )
            })}
          </select>
        </div>
      </section>
    </Layout>
  )
}

export default Genres
