import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"

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
})

const NewsLetter = ({ data }) => {
  const classes = useStyles()
  return (
    <Layout>
      <SEO title="Monthly Anime Suggestions" />
      <section className="newsletter">
        <ul className="newsletter--list">
          {data.allMarkdownRemark.edges.map(post => (
            <Card className={classes.root}>
              <li
                className="newsletter--display newsletter--list__display"
                key={post.node.id}
              >
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    title={`${post.node.frontmatter.title}`}
                  />
                  <Link
                    to={`${post.node.frontmatter.category}/${post.node.frontmatter.slug}`}
                  >
                    <Img
                      fluid={
                        post.node.frontmatter.featuredImage.childImageSharp
                          .fluid
                      }
                    />
                  </Link>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {post.node.frontmatter.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {post.node.frontmatter.excerpt}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </li>
            </Card>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export default NewsLetter
