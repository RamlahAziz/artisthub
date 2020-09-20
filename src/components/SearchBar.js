import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import ArtistDetails from "./ArtistDetails";
import ArtistEvents from "./ArtistEvents.js";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import SearchResults from "./SearchResults.js";
import Axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function SearchBar() {

  const classes = useStyles();
  const [artistName, setArtistName] = useState("");
  const [showResults, setShowResults] = React.useState(false);
  const onClick = () => setShowResults(true);
  const count = "3";

  return (
    <Grid container direction="column" alignItems="flex-start">
      <Grid item xs="12">
        <Paper component="form" className={classes.root}>
          <InputBase
            className={classes.input}
            placeholder="Search Artist Name"
            type="text"
            value={artistName}
            onChange={(e) => setArtistName(e.target.value)}
            //inputProps={{ 'aria-label': 'search artist name' }}
          />
          <IconButton
            type="submit"
            className={classes.iconButton}
            // onSubmit={() => }
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
          <div>{console.log(artistName)}</div>
        </Paper>
      </Grid>

      <Grid item xs="12">
        {(artistName=="")?null:<SearchResults searchTerm={artistName}/>}
      </Grid>
      <Grid item xs="12">
        <Typography>{count} upcoming events</Typography>
      </Grid>
      <Grid item xs="12">
        <ArtistEvents />
      </Grid>
    </Grid>
  );
}
