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
        message={
          <img
            height="36"
            style={{ border: `0px`, height: `36px` }}
            src="https://az743702.vo.msecnd.net/cdn/kofi2.png?v=2"
            alt="Buy Me a Coffee at ko-fi.com"
          />
        }
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
