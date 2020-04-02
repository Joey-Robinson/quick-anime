import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

const NewsletterList = ({
  title,
  image,
  publicUrl,
  description,
  excerpt,
  link,
}) => {
  return (
    <li className="newsletter--display news--list">
      <div className={`news--card`}>
        <Link
          className="news--link"
          style={{
            textDecoration: "none",
          }}
          to={link}
        >
          <h2>{title}</h2>
        </Link>
        <a href={publicUrl} target="_blank" rel="noopener noreferrer">
          <Img className="news--image" fluid={image} alt={`${image}`} />
        </a>
        <Link
          className="news--link"
          style={{
            textDecoration: "none",
          }}
          to={link}
        >
          <div className={`news--heading newsletter--heading`}>
            <p>{description}</p>
            <p>{excerpt}</p>
          </div>
        </Link>
      </div>
    </li>
  )
}

export default NewsletterList
