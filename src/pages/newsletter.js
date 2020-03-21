import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import TextField from "@material-ui/core/TextField"
import { makeStyles } from "@material-ui/core/styles"
import SEO from "../components/seo"
import NewsletterList from "../components/newsletter/newsletter.list"

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: ".5em",
    input: {
      color: "white",
    },
    "& > *": {
      margin: theme.spacing(1),
      width: 320,
    },
  },
}))

const Newsletter = props => {
  const classes = useStyles()
  const { data } = props
  const allPosts = data.allMarkdownRemark.edges

  const emptyQuery = ""

  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
  })

  const handleInputChange = event => {
    const query = event.target.value
    const { data } = props
    const posts = data.allMarkdownRemark.edges || []
    const filteredData = posts.filter(post => {
      const { description, title, tags } = post.node.frontmatter
      return (
        description.toLowerCase().includes(query.toLowerCase()) ||
        title.toLowerCase().includes(query.toLowerCase()) ||
        tags
          .join("")
          .toLowerCase()
          .includes(query.toLowerCase())
      )
    })

    setState({
      query,
      filteredData,
    })
  }

  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  const posts = hasSearchResults ? filteredData : allPosts

  return (
    <Layout>
      <SEO title="Monthly Anime Writeups" />
      <section className="newsletter">
        <div className="newsletter--input">
          <form
            className={`${classes.root}`}
            onSubmit={event => event.preventDefault()}
            autoComplete="off"
            noValidate
          >
            <TextField
              value={query}
              className={`${classes.margin}`}
              onChange={handleInputChange}
              InputLabelProps={{
                style: {
                  color: "white",
                },
              }}
              aria-label="Search Through Newsletter Posts"
              id="newsletter-search"
              label="Search Newsletters"
              variant="filled"
              color="secondary"
              InputProps={{
                style: {
                  color: "white",
                },
              }}
            />
          </form>
        </div>
        <ul className="newsletter--list news">
          {query === ""
            ? data.allMarkdownRemark.edges.map(post => {
                return (
                  <NewsletterList
                    key={post.node.id}
                    place={`/${post.node.frontmatter.category}/${post.node.frontmatter.slug}`}
                    title={post.node.frontmatter.title}
                    publicUrl={post.node.frontmatter.featuredImage.publicURL}
                    image={
                      post.node.frontmatter.featuredImage.childImageSharp.fluid
                    }
                    slug={post.node.frontmatter.slug}
                    category={post.node.frontmatter.category}
                    description={post.node.frontmatter.description}
                    excerpt={post.node.excerpt}
                  />
                )
              })
            : posts.map(post => {
                return (
                  <NewsletterList
                    key={post.node.id}
                    place={`/${post.node.frontmatter.category}/${post.node.frontmatter.slug}`}
                    title={post.node.frontmatter.title}
                    publicUrl={post.node.frontmatter.featuredImage.publicURL}
                    image={
                      post.node.frontmatter.featuredImage.childImageSharp.fluid
                    }
                    slug={post.node.frontmatter.slug}
                    category={post.node.frontmatter.category}
                    description={post.node.frontmatter.description}
                    excerpt={post.node.excerpt}
                  />
                )
              })}
        </ul>
      </section>
    </Layout>
  )
}

export default Newsletter

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
            tags
            featuredImage {
              publicURL
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
