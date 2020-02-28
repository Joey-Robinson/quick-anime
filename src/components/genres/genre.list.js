import React from "react"
import { Select, InputLabel, MenuItem, FormControl } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  root: {
    color: "#fff",
  },
  select: {
    color: "#fff",
    backgroundColor: "#3f51b5",
    padding: ".5em 1.5rem",
  },
})

const GenreList = ({ className, handler }) => {
  const classes = useStyles()
  return (
    <div className={className}>
      <InputLabel className={classes.root} id="genreSelect">
        Select a genre of anime:
      </InputLabel>
      <br />
      <FormControl>
        <Select
          className={classes.select}
          defaultValue={"1"}
          onChange={handler}
        >
          <MenuItem
            style={{ backgroundColor: "#3f51b5", color: "#fff" }}
            value={"1"}
          >
            Action
          </MenuItem>
          <MenuItem
            style={{ backgroundColor: "#3f51b5", color: "#fff" }}
            value={"2"}
          >
            Adventure
          </MenuItem>
          <MenuItem
            style={{ backgroundColor: "#3f51b5", color: "#fff" }}
            value={"3"}
          >
            Cars
          </MenuItem>
          <MenuItem
            style={{ backgroundColor: "#3f51b5", color: "#fff" }}
            value={"4"}
          >
            Comedy
          </MenuItem>
          <MenuItem
            style={{ backgroundColor: "#3f51b5", color: "#fff" }}
            value={"5"}
          >
            Dementia
          </MenuItem>
          <MenuItem
            style={{ backgroundColor: "#3f51b5", color: "#fff" }}
            value={"6"}
          >
            Demons
          </MenuItem>
          <MenuItem
            style={{ backgroundColor: "#3f51b5", color: "#fff" }}
            value={"7"}
          >
            Mystery
          </MenuItem>
          <MenuItem
            style={{ backgroundColor: "#3f51b5", color: "#fff" }}
            value={"8"}
          >
            Drama
          </MenuItem>
          <MenuItem
            style={{ backgroundColor: "#3f51b5", color: "#fff" }}
            value={"9"}
          >
            Ecchi
          </MenuItem>
          <MenuItem
            style={{ backgroundColor: "#3f51b5", color: "#fff" }}
            value={"10"}
          >
            Fantasy
          </MenuItem>
          <MenuItem
            style={{ backgroundColor: "#3f51b5", color: "#fff" }}
            value={"11"}
          >
            Game
          </MenuItem>
          <MenuItem
            style={{ backgroundColor: "#3f51b5", color: "#fff" }}
            value={"12"}
          >
            Hentai
          </MenuItem>
          <MenuItem
            style={{ backgroundColor: "#3f51b5", color: "#fff" }}
            value={"13"}
          >
            Historical
          </MenuItem>
          <MenuItem
            style={{ backgroundColor: "#3f51b5", color: "#fff" }}
            value={"14"}
          >
            Horror
          </MenuItem>
          <MenuItem
            style={{ backgroundColor: "#3f51b5", color: "#fff" }}
            value={"15"}
          >
            Kids
          </MenuItem>
          <MenuItem
            style={{ backgroundColor: "#3f51b5", color: "#fff" }}
            value={"16"}
          >
            Magic
          </MenuItem>
          <MenuItem
            style={{ backgroundColor: "#3f51b5", color: "#fff" }}
            value={"17"}
          >
            Martial Arts
          </MenuItem>
          <MenuItem
            style={{ backgroundColor: "#3f51b5", color: "#fff" }}
            value={"18"}
          >
            Mecha
          </MenuItem>
          <MenuItem
            style={{ backgroundColor: "#3f51b5", color: "#fff" }}
            value={"19"}
          >
            Music
          </MenuItem>
          <MenuItem
            style={{ backgroundColor: "#3f51b5", color: "#fff" }}
            value={"20"}
          >
            Parody
          </MenuItem>
          <MenuItem
            style={{ backgroundColor: "#3f51b5", color: "#fff" }}
            value={"21"}
          >
            Samurai
          </MenuItem>
          <MenuItem
            style={{ backgroundColor: "#3f51b5", color: "#fff" }}
            value={"22"}
          >
            Romance
          </MenuItem>
          <MenuItem
            style={{ backgroundColor: "#3f51b5", color: "#fff" }}
            value={"23"}
          >
            School
          </MenuItem>
          <MenuItem
            style={{ backgroundColor: "#3f51b5", color: "#fff" }}
            value={"24"}
          >
            Sci-Fi
          </MenuItem>
          <MenuItem
            style={{ backgroundColor: "#3f51b5", color: "#fff" }}
            value={"25"}
          >
            Shoujo
          </MenuItem>
          <MenuItem
            style={{ backgroundColor: "#3f51b5", color: "#fff" }}
            value={"26"}
          >
            Shoujo-Ai
          </MenuItem>
          <MenuItem
            style={{ backgroundColor: "#3f51b5", color: "#fff" }}
            value={"27"}
          >
            Shounen
          </MenuItem>
          <MenuItem
            style={{ backgroundColor: "#3f51b5", color: "#fff" }}
            value={"28"}
          >
            Shounen-Ai
          </MenuItem>
          <MenuItem
            style={{ backgroundColor: "#3f51b5", color: "#fff" }}
            value={"29"}
          >
            Space
          </MenuItem>
          <MenuItem
            style={{ backgroundColor: "#3f51b5", color: "#fff" }}
            value={"30"}
          >
            Sports
          </MenuItem>
          <MenuItem
            style={{ backgroundColor: "#3f51b5", color: "#fff" }}
            value={"31"}
          >
            Super Power
          </MenuItem>
          <MenuItem
            style={{ backgroundColor: "#3f51b5", color: "#fff" }}
            value={"32"}
          >
            Vampire
          </MenuItem>
          <MenuItem
            style={{ backgroundColor: "#3f51b5", color: "#fff" }}
            value={"33"}
          >
            Yaoi
          </MenuItem>
          <MenuItem
            style={{ backgroundColor: "#3f51b5", color: "#fff" }}
            value={"34"}
          >
            Yuri
          </MenuItem>
          <MenuItem
            style={{ backgroundColor: "#3f51b5", color: "#fff" }}
            value={"35"}
          >
            Harem
          </MenuItem>
          <MenuItem
            style={{ backgroundColor: "#3f51b5", color: "#fff" }}
            value={"36"}
          >
            Slice Of Life
          </MenuItem>
          <MenuItem
            style={{ backgroundColor: "#3f51b5", color: "#fff" }}
            value={"37"}
          >
            Supernatural
          </MenuItem>
          <MenuItem
            style={{ backgroundColor: "#3f51b5", color: "#fff" }}
            value={"38"}
          >
            Military
          </MenuItem>
          <MenuItem
            style={{ backgroundColor: "#3f51b5", color: "#fff" }}
            value={"39"}
          >
            Police
          </MenuItem>
          <MenuItem
            style={{ backgroundColor: "#3f51b5", color: "#fff" }}
            value={"40"}
          >
            Psychological
          </MenuItem>
          <MenuItem
            style={{ backgroundColor: "#3f51b5", color: "#fff" }}
            value={"41"}
          >
            Thriller
          </MenuItem>
          <MenuItem
            style={{ backgroundColor: "#3f51b5", color: "#fff" }}
            value={"42"}
          >
            Seinen
          </MenuItem>
          <MenuItem
            style={{ backgroundColor: "#3f51b5", color: "#fff" }}
            value={"43"}
          >
            Josei
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}

export default GenreList
