import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export const newsletterQuery = graphql`
  query NewsletterPostByPath($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
        author
        description
        date(formatString: "MMMM DD, YYYY")
      }
      excerpt
    }
  }
`

const NewsletterTemplate = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.description}
        keywords={[
          post.excerpt,
          post.frontmatter.title,
          post.frontmatter.author,
          post.frontmatter.description,
        ]}
      />
      <section className="writeups">
        <hgroup>
          <h1 style={{ color: "white" }}>{post.frontmatter.title}</h1>
          <h2>{post.frontmatter.description}</h2>
          <h4>{post.frontmatter.author}</h4>
        </hgroup>
        <div className="writeups--content__back">
          <Link to="/newsletter/">&#8592; Go Back</Link>
        </div>
        <p className="writeups--content__maker">{post.frontmatter.date}</p>
        <div className="writeups--content__title">
          <h2>{post.frontmatter.title}</h2>
        </div>
        <div
          className="writeups--content__main"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </section>
    </Layout>
  )
}

export default NewsletterTemplate
