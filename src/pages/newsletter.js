import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import TextField from "@material-ui/core/TextField"
import { makeStyles } from "@material-ui/core/styles"
import SEO from "../components/seo"
import NewsletterList from "../components/newsletter/newsletter.list"

export const pageQuery = graphql`
  query NewsletterIndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 100)
          frontmatter {
            slug
            link
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
                const category = post.node.frontmatter.category
                const slug = post.node.frontmatter.slug
                const title = post.node.frontmatter.title
                const publicURL = post.node.frontmatter.featuredImage.publicURL
                const description = post.node.frontmatter.description
                const excerpt = post.node.excerpt
                const image =
                  post.node.frontmatter.featuredImage.childImageSharp.fluid
                const link = `/${category}/${slug}`
                console.log(slug)

                return (
                  <NewsletterList
                    key={post.node.id}
                    title={title}
                    link={link}
                    publicUrl={publicURL}
                    image={image}
                    slug={`/${slug}/`}
                    category={category}
                    description={description}
                    excerpt={excerpt}
                  />
                )
              })
            : posts.map(post => {
                const category = post.node.frontmatter.category
                const slug = post.node.frontmatter.slug
                const title = post.node.frontmatter.title
                const publicURL = post.node.frontmatter.featuredImage.publicURL
                const description = post.node.frontmatter.description
                const excerpt = post.node.excerpt
                const image =
                  post.node.frontmatter.featuredImage.childImageSharp.fluid
                const link = `/${category}/${slug}`
                console.log(link)

                return (
                  <NewsletterList
                    key={post.node.id}
                    title={title}
                    link={link}
                    publicUrl={publicURL}
                    image={image}
                    slug={slug}
                    category={category}
                    description={description}
                    excerpt={excerpt}
                  />
                )
              })}
        </ul>
      </section>
    </Layout>
  )
}

export default Newsletter
