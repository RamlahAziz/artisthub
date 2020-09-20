import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
import CardContent from "@material-ui/core/CardContent";
import { red } from "@material-ui/core/colors";
import Typography from "@material-ui/core/Typography";
import { Grid, TableCell, TableHead, TableRow } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import "fontsource-roboto";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  table: {
    borderBottom: "none",
  },
  text: {
    fontFamily: "Roboto",
    textAlign: "left",
    fontSize: 14,
  },
}));

export default function ArtistEvents(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.text} variant="overline" gutterBottom>
          EVENT DETAILS
        </Typography>
        <Divider variant="middle" />
        <Grid container direction="column" alignItems="flex-start">
          <Grid container direction="row">
            <Grid item xs={6}>
              <Typography className={classes.text}>
                Country
                {"\nPakistan"}
                {props.country}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography className={classes.text}>
                City {"\nIslamabad" + props.city}
              </Typography>
            </Grid>
          </Grid>
          <Grid></Grid>
          <Grid container direction="row">
            <Grid item xs={6}>
              <Typography className={classes.text}>
                Venue {"\nStadium" + props.venue}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography className={classes.text}>
                Date {"\n23 Sep 2019" + props.date}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
