import React from "react"

const AnimeLayout = ({
  title,
  image,
  synopsis,
  score,
  ranked,
  background,
  information,
  episodes,
  genres = [],
  licensors,
  producers,
  rating,
  premired,
  source,
}) => (
  <section className="anime">
    <span className="anime--top">
      <h1 className="anime--heading">{title}</h1>
      <div className="anime--top__info">
        <span>Details</span>
        <span>Recommendations</span>
      </div>
    </span>

    <div className="anime--content">
      <img src={image} alt="" />
      <ul>
        <h3>Information</h3>
        <li>
          <span className="info--span">Episodes:</span> {episodes}
        </li>
        <li className="commas">
          <span className="info--span">Genres:</span>
          {genres}
        </li>
        <li>
          <span className="info--span">Producers:</span>
          {producers}
        </li>
        <li>
          <span className="info--span">Rating:</span>
          {rating}
        </li>
        <li>
          <span className="info--span">Premired:</span>
          {premired}
        </li>
        <li>
          <span className="info--span">Liscensors:</span>
          {licensors}
        </li>
        <li>
          <span className="info--span">Source:</span>
          {source}
        </li>
      </ul>
    </div>
    <article>
      <div className="anime--synopsis">
        <h2>Synopsis</h2>
        <p>{synopsis}</p>
      </div>
      <div className="anime--background">
        <h2>Background</h2>
        <p>{background}</p>
      </div>
    </article>
  </section>
)

export default AnimeLayout
