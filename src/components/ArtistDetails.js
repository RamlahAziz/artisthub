import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: 20,
    textAlign: "left",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

//import DialogForm from "./EMRMakerByDocForm";
//<DialogForm patientMy={props.record} doctorMy={props.doctor}/>

export default function ArtistDetails(props) {
  console.log("Artist Details", props);

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="picture" className={classes.avatar}>
            R
          </Avatar>
        }
        title={props.artist}
        subheader={props.facebook}
      />
    </Card>
  );
}
