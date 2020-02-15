import React from "react"
import { Link } from "gatsby"

const InternalLink = ({ path, message }) => (
  <Link to={`/${path}/`}>{message}</Link>
)

export default InternalLink
