import React from "react"
import InternalLink from "../links/link.internal"

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <InternalLink path={`/`} message="Home" />
      </li>
      <li>
        <InternalLink path={`/newsletter/`} message="Newsletter" />
      </li>
      <li>
        <InternalLink path={`/contact/`} message="Contact" />
      </li>
    </ul>
  </nav>
)

export default Navigation
