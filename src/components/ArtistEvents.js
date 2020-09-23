import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Grid} from "@material-ui/core";
import Box from '@material-ui/core/Box';

import "fontsource-roboto";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  table: {
    borderBottom: "none",
  },
  text:{
    fontFamily: "Roboto",
    textAlign: "left",
    fontSize: 15,
  },
  subtext: {
    fontFamily: "Roboto",
    textAlign: "left",
    fontSize: 15,
  },
}));

export default function ArtistEvents(props) {
  console.log('Artist Event Details: ',props);
  const classes = useStyles();

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]

  function dateFormat(string){
    //2020-10-07T19:00:00
    const date = new Date(string);
    return date.getDate()+" " + months[date.getMonth()] +", " + date.getFullYear();
  }

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
              <Typography fontWeight="fontWeightBold" className={classes.text}>
                <Box fontWeight="fontWeightBold">
                  Country
                </Box>
                <Box fontWeight="fontWeightLight">{props.event.venue.country}</Box>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography className={classes.text}>
                <Box fontWeight="fontWeightBold" m={0}>
                  City
                </Box>
                <Box fontWeight="fontWeightLight" m={0}>{props.event.venue.city}</Box>
              </Typography>
            </Grid>
          </Grid>
          <Grid></Grid>
          <Grid container direction="row">
            <Grid item xs={6}>
              <Typography className={classes.text}>
                <Box fontWeight="fontWeightBold" m={1}>Venue</Box>
                <Box fontWeight="fontWeightLight" m={0}>{props.event.venue.name}</Box>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography className={classes.text}>
                <Box fontWeight="fontWeightBold" m={1}>Date</Box>
                <Box fontWeight="fontWeightLight" m={0}>{dateFormat(props.event.datetime)}</Box>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
