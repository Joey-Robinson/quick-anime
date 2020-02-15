import React from "react"
import Navigation from "./header.nav"
import Image from "../image"
import ExternalLink from "../links/link.external"

const Header = () => (
  <header>
    <h1>Quick Anime</h1>
    <Navigation />
    <span>
      <ExternalLink
        path="https://ko-fi.com/joeyrobinson"
        message={<Image alt="Buy Me A Coffee" filename="kofi.png" />}
        aria-label="Buy Me A Coffee"
      />
      <ExternalLink
        path="https://www.gatsbyjs.org/"
        message={<Image alt="Powered By Gatsby" filename="gatsby-icon.png" />}
        aria-label="Powered By Gatsby"
      />
      <ExternalLink
        path="https://github.com/Joey-Robinson"
        message={<Image alt="GitHub" filename="octocat.png" />}
        aria-label="GitHub"
      />
    </span>
  </header>
)

export default Header
