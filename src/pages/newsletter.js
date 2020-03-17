import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"

export const pageQuery = graphql`
  query NewsletterIndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 150)
          frontmatter {
            slug
            category
            title
            description
            date(formatString: "MMMM DD, YYYY")
            author
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  h2: {
    fontSize: "30px",
  },
})

const NewsLetter = ({ data }) => {
  const defaultCopyText = "Copy URL"
  const [copyText, setCopyText] = useState(defaultCopyText)

  useEffect(() => {
    let current = true
    if (copyText !== defaultCopyText) {
      setTimeout(() => {
        if (current) {
          setCopyText(defaultCopyText)
        }
      }, 3000)
    }
    return () => (current = false)
  }, [copyText])

  const productionUrl = data.allMarkdownRemark.edges.map(po => {
    return `${po.node.frontmatter.category}/${po.node.frontmatter.slug}`
  })

  const copy = event => {
    event.preventDefault()
    navigator.clipboard.writeText(productionUrl).then(
      () => {
        setCopyText("Copied")
      },
      () => {
        setCopyText("Error copying text")
      }
    )
  }
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Monthly Anime Suggestions" />
      <section className="newsletter">
        <ul className="newsletter--list news">
          {data.allMarkdownRemark.edges.map(post => (
            <li className="newsletter--display" key={post.node.id}>
              <Link
                style={{ textDecoration: "none" }}
                to={`${post.node.frontmatter.category}/${post.node.frontmatter.slug}`}
              >
                <Card className={`${classes.root} news--card`}>
                  <Img
                    fluid={
                      post.node.frontmatter.featuredImage.childImageSharp.fluid
                    }
                  />
                  <CardContent className="news--heading newsletter--heading">
                    <hgroup>
                      <Typography
                        className={classes.h2}
                        gutterBottom
                        variant="h2"
                        component="h2"
                      >
                        {post.node.frontmatter.title}
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="h5"
                      >
                        {post.node.frontmatter.description}
                      </Typography>
                    </hgroup>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {post.node.frontmatter.excerpt}
                    </Typography>
                    <Button variant="contained" color="primary" onClick={copy}>
                      {copyText}
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export default NewsLetter
