import React from "react"
import { graphql } from "gatsby"

const Post = ({ data }) => {
  return <h1>{data.customApi.anime.title}</h1>
}

export const query = graphql`
  {
    customApi {
      anime {
        title
        url
      }
    }
  }
`

export default Post
