import React from "react"

const PaginationButton = ({ message, onClick }) => (
  <button className="genre--button" onClick={onClick}>
    {message}
  </button>
)

export default PaginationButton
