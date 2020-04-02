import React from "react"
import Header from "./masthead/header.main"

const Layout = ({ children }) => {
  return (
    <>
      <main className="primary">
        <Header />
        <section className="section">{children}</section>
      </main>
    </>
  )
}

export default Layout
