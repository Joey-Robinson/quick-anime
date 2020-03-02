import React from "react"
import Divider from "@material-ui/core/Divider"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import { Link as GatsbyLink } from "gatsby"

const Navigation = () => {
  return (
    <div>
      <Divider />
      <List>
        <ListItem>
          <GatsbyLink to="/">Home</GatsbyLink>
        </ListItem>

        <ListItem>
          <GatsbyLink to="/newsletter/">Newsletter</GatsbyLink>
        </ListItem>

        <ListItem>
          <GatsbyLink to="/contact/">Contact</GatsbyLink>
        </ListItem>

        <Divider />
        <Divider />

        <ListItem>
          <GatsbyLink to="/anime/">Anime</GatsbyLink>
        </ListItem>

        <ListItem>
          <GatsbyLink to="/anime/genres">Anime Genres</GatsbyLink>
        </ListItem>
      </List>
      <Divider />
    </div>
  )
}

export default Navigation
