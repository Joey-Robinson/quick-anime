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
  const title = post.frontmatter.title
  const description = post.frontmatter.description
  const author = post.frontmatter.author
  const date = post.frontmatter.date
  const excerpt = post.excerpt
  const html = post.html
  console.log(html)
  return (
    <Layout>
      <SEO
        title={title}
        description={description}
        keywords={[excerpt, title, author, description]}
      />
      <section className="writeups">
        <hgroup>
          <h1 style={{ color: "white" }}>{title}</h1>
          <h2>{description}</h2>
          <h4>{author}</h4>
        </hgroup>
        <div className="writeups--content__back">
          <Link to="/newsletter/">&#8592; Go Back</Link>
        </div>
        <p className="writeups--content__maker">{date}</p>
        <div className="writeups--content__title">
          <h2>{title}</h2>
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
