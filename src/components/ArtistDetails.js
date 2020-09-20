import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import {red} from "@material-ui/core/colors";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
        width: 345,
        margin: 10,
        textAlign: "left",
        padding: 10,
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

//import DialogForm from "./EMRMakerByDocForm";
//<DialogForm patientMy={props.record} doctorMy={props.doctor}/>

export default function ArtistDetails(props) {
    console.log("Artist Details", props.results);
    const classes = useStyles();
    return (

        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="picture" className={classes.avatar} src={props.results.image_url}>
                        {/*{props.results.name?'':props.results.name.charAt(0)}*/}
                    </Avatar>
                }
                title={props.results.name}
                subheader={props.results.facebook_page_url}
            />
        </Card>
    );
}
