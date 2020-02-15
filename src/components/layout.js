import React from "react"
import Header from "./masthead/header.main"

const Layout = ({ children }) => {
  return (
    <>
      <main className="primary">
        <Header />
        {children}
      </main>
    </>
  )
}

export default Layout
