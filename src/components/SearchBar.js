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
  const baseUrl = `https://rest.bandsintown.com`;
  const appId = "9c42d4dc9c1397201a4e3dc4d0bb840c";
  const classes = useStyles();
  const [artistName, setArtistName] = useState("");
  const count = "3";
  let searchresults = "";

  // useEffect(() => {
  //   //data fetching
  //   // document.title = `You clicked ${count} times`;
  // }, [artistName]);

  async function searchArtists(searchValue) {
    try {
      const response = await Axios.get(
        `${baseUrl}/artists/${searchValue}?app_id=${appId}`,
        {
          headers: {
            "X-Requested-With": "XMLHttpRequest",
          },
        }
      );
      const data = response.data;
      console.log("Data returned from API: ", data);
      return data;
    } catch (error) {
      // If an error occurred we log it to the console
      console.error("Request Failed: ", error);
    }
  }

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
            onSubmit={searchArtists(artistName)}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
          <div>{console.log(artistName)}</div>
        </Paper>
      </Grid>
      <Grid item xs="12">
        <Typography>
          {count} results found for {artistName}
        </Typography>
      </Grid>

      <Grid item xs="12">
        <SearchResults results={searchresults}></SearchResults>
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
