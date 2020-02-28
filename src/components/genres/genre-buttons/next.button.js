import React from "react"
import Button from "@material-ui/core/Button"
import ArrowForwardIcon from "@material-ui/icons/ArrowForward"

const NextButton = ({ className, onClick }) => (
  <Button
    className={className}
    variant="contained"
    color="primary"
    endIcon={<ArrowForwardIcon />}
    onClick={onClick}
  >
    Next Page
  </Button>
)

export default NextButton
