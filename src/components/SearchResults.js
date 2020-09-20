import React, {useEffect, useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
import CardContent from "@material-ui/core/CardContent";
import { red } from "@material-ui/core/colors";
import Typography from "@material-ui/core/Typography";
import { Grid, TableCell, TableHead, TableRow } from "@material-ui/core";
import ArtistDetails from "./ArtistDetails";
import Axios from "axios";

const useStyles = makeStyles((theme) => ({
  text: {
    margin: 10,
    textAlign: "left",
    padding: 10,
  },

}));

export default function SearchResults(props) {

  const classes = useStyles();

  // console.log('searchterm',props);

  let count = 0;
  let temp=[]
  const [searchResults,setSearchResults] = useState([]);
  //using a proxy to avoid cors errors
  const baseUrl = `https://cors-anywhere.herokuapp.com/https://rest.bandsintown.com`;
  const appId = "codingbootcamp";


  useEffect(() => {
    //data fetching whenever searchterm changes
    searchArtists(props.searchTerm);

  }, [props.searchTerm]);


  async function searchArtists(searchValue) {
    try {
      const response = await Axios.get(
          `${baseUrl}/artists/${searchValue}?app_id=${appId}`,
          {
            headers: {
              "accept":"application/json",
              "Content-Type":"application/x-www-form-urlencoded",
              "X-Requested-With": "XMLHttpRequest",
              "Access-Control-Allow-Origin": "*",
            },
          }
      );
      const data = response.data;
      console.log("Data returned from API: ", data);
      searchResults.push(data);
      setSearchResults(searchResults)
      console.log('Array of Search Results ', searchResults);

      return data;
    } catch (error) {
      // If an error occurred we log it to the console
      console.error("Request Failed: ", error);
    }
  }

  return (
    <div>
      <Grid container direction="row" alignItems="flex-start">

        <Grid item xs="12">
          <Typography className={classes.text}>
            {searchResults.length} results found for "{props.searchTerm}"
          </Typography>
        </Grid>
            {searchResults.map((record) => (
                <Grid item xs="4">
                  <ArtistDetails results={record}></ArtistDetails>
                </Grid>

            ))}
      </Grid>
    </div>
  );
}

