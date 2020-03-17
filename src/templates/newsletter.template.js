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
        description={post.html}
        keywords={[
          post.excerpt,
          post.frontmatter.title,
          post.frontmatter.author,
        ]}
      />
      <div className="blogs">
        <h1 style={{ color: "white" }}>YEET</h1>
        <div className="blogs--content__back">
          <Link to="/blog/">&#8592; Go Back</Link>
        </div>
        <p className="blogs--content__maker">{post.frontmatter.date}</p>
        <div className="blogs--content__title">
          <h2>{post.frontmatter.title}</h2>
        </div>
        <div
          className="blogs--content__main"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </Layout>
  )
}

export default NewsletterTemplate
