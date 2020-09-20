import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
import CardContent from "@material-ui/core/CardContent";
import { red } from "@material-ui/core/colors";
import Typography from "@material-ui/core/Typography";
import { Grid, TableCell, TableHead, TableRow } from "@material-ui/core";
import ArtistDetails from "./ArtistDetails";

export default function SearchResults(props) {
  console.log(props);
  const count = 3;
  const artistName = "";
  return (
    <div>
      <Grid container direction="row" alignItems="flex-start">
        <Grid item xs="12">
          <Typography>
            {count} results found for {artistName}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
//                    {records.map((record) => ())}
