import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"

export const pageQuery = graphql`
  query NewsletterIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          excerpt(pruneLength: 100)
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
    width: 320,
    height: 480,
  },
  media: {
    height: 240,
  },
  h2: {
    fontSize: "30px",
    backgroundColor: "transparent",
  },
})

const NewsLetter = ({ data }) => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Monthly Anime Suggestions" />
      <section className="newsletter">
        <ul className="newsletter--list news">
          {data.allMarkdownRemark.edges.map(post => (
            <li className="newsletter--display news--list" key={post.node.id}>
              <Card className={`${classes.root} news--card`}>
                <>
                  <h2>{post.node.frontmatter.title}</h2>
                  <Link
                    className="news--link"
                    style={{
                      textDecoration: "none",
                    }}
                    to={`/${post.node.frontmatter.category}/${post.node.frontmatter.slug}`}
                  >
                    <Img
                      className="news--image"
                      fluid={
                        post.node.frontmatter.featuredImage.childImageSharp
                          .fluid
                      }
                    />
                    <CardContent
                      className={`${classes.media} news--heading newsletter--heading`}
                    >
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="h5"
                        style={{ zIndex: "5" }}
                      >
                        {post.node.frontmatter.description}
                      </Typography>
                      <p>{post.node.excerpt}</p>
                    </CardContent>
                  </Link>
                </>
              </Card>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export default NewsLetter
