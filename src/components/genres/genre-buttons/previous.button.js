import React from "react"
import Button from "@material-ui/core/Button"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"

const PreviousButton = ({ className, onClick, message }) => (
  <Button
    className={className}
    variant="contained"
    color="primary"
    startIcon={<ArrowBackIcon />}
    onClick={onClick}
  >
    {message}
  </Button>
)

export default PreviousButton
