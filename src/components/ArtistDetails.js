import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import {red} from "@material-ui/core/colors";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        width: 345,
        margin: 10,
        textAlign: "left",
        padding: 0,
    },
    avatar: {
        backgroundColor: red[500],
    },
    text:{
        //fontFamily: "Roboto",
        //textAlign: "left",
        fontSize: 12,
        // "7a7f80"
    },
}));

//import DialogForm from "./EMRMakerByDocForm";
//<DialogForm patientMy={props.record} doctorMy={props.doctor}/>

export default function ArtistDetails(props) {

    //rendered twice?
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
                subheader={<Typography className={classes.text} color={"textSecondary"} noWrap={false}>{props.results.facebook_page_url}</Typography>}
            />
        </Card>
    );
}