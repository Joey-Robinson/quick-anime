import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import Img from "gatsby-image"
import { Link } from "gatsby"

const useStyles = makeStyles({
  root: {
    width: 340,
    height: 530,
  },
  media: {
    height: 320,
  },
  h2: {
    fontSize: "30px",
    backgroundColor: "transparent",
  },
})

const NewsletterList = ({
  title,
  image,
  publicUrl,
  description,
  excerpt,
  link,
}) => {
  const classes = useStyles()

  return (
    <li className="newsletter--display news--list">
      <Card className={`${classes.root} news--card`}>
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
          <CardContent
            className={`${classes.media} news--heading newsletter--heading`}
          >
            <Typography gutterBottom variant="subtitle1" component="h5">
              {description}
            </Typography>
            <Typography gutterBottom variant="caption" component="p">
              {excerpt}
            </Typography>
          </CardContent>
        </Link>
      </Card>
    </li>
  )
}

export default NewsletterList
