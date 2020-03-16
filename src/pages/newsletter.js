import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"

export const pageQuery = graphql`
  query NewsletterIndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 150)
          frontmatter {
            path
            title
            date(formatString: "MMMM DD, YYYY")
            author
          }
        }
      }
    }
  }
`

const NewsLetter = ({ data }) => (
  <Layout>
    <SEO title="Monthly Anime Suggestions" />
    <section className="newsletter">
      <ul className="newsletter--list">
        {data.allMarkdownRemark.edges.map(post => (
          <li
            className="newsletter--display newsletter--list__display"
            key={post.node.id}
          >
            <Link
              className="newsletter--display__title newsletter--list__title"
              to={post.node.frontmatter.path}
            >
              <h2>{post.node.frontmatter.title} &rarr;</h2>
            </Link>
            <div className="newsletter--display__date newsletter--list__date">
              {post.node.frontmatter.date}
            </div>
            <p className="newsletter--display__excerpt newsletter--list__excerpt">
              {post.node.excerpt}
            </p>
          </li>
        ))}
      </ul>
    </section>
  </Layout>
)

export default NewsLetter
