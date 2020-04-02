import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
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

const Newsletter = props => {
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
            <input
              label="Search Newsletter Posts"
              id="newsletter-search"
              aria-label="Search Newsletter Posts"
              type="text"
              value={query}
              className="in"
              onChange={handleInputChange}
            />
          </form>
        </div>
        <ul className="newsletter--list news">
          {query === ""
            ? data.allMarkdownRemark.edges.map(post => {
                console.log(post.node)
                const category = post.node.frontmatter.category
                const slug = post.node.frontmatter.slug
                const title = post.node.frontmatter.title
                const publicURL = post.node.frontmatter.featuredImage.publicURL
                const description = post.node.frontmatter.description
                const excerpt = post.node.excerpt
                const image =
                  post.node.frontmatter.featuredImage.childImageSharp.fluid
                {
                  /* const link = `/${category}/${slug}` */
                }
                const link = post.node.frontmatter.link
                console.log(link)

                return (
                  <NewsletterList
                    key={post.node.id}
                    title={title}
                    link={`/${link}/`}
                    publicUrl={publicURL}
                    image={image}
                    slug={slug}
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
