import React from "react"

const PreviousButton = ({ className, onClick, message }) => (
  <button className={className} onClick={onClick}>
    {message}
  </button>
)

export default PreviousButton
