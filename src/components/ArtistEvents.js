//displays one event in a card, with country, date, city and venue
//is passed one event as props
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {Grid} from "@material-ui/core";

import "fontsource-roboto";

const useStyles = makeStyles((theme) => ({
    root: {
        width: 300,
        margin:5,
    },
    media: {
        height: 0,
        paddingTop: "56.25%", // 16:9
    },
    table: {
        borderBottom: "none",
    },
    header: {
        fontFamily: "Roboto",
        textAlign: "left",
        fontSize: 13,
    },
    text: {
        fontFamily: "Roboto",
        textAlign: "left",
        fontSize: 13,
        fontWeight: "bold",
        paddingTop: 8,
    },
    subtext: {
        fontFamily: "Roboto",
        textAlign: "left",
        fontSize: 12,
    },
}));

export default function ArtistEvents(props) {
    // console.log('Artist Event Details: ', props);
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

    function dateFormat(string) {
        //2020-10-07T19:00:00
        const date = new Date(string);
        return date.getDate() + " " + months[date.getMonth()] + ", " + date.getFullYear();
    }

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.header} align={"left"} alvariant="overline" gutterBottom>
                    EVENT DETAILS
                </Typography>
                <Divider variant="middle"/>
                <Grid container direction="column" alignItems="flex-start">
                    <Grid container direction="row">
                        <Grid item xs={6}>
                            <Typography className={classes.text}>Country</Typography>
                            <Typography noWrap={true} className={classes.subtext}
                                        color={"textSecondary"}>{props.event.venue.country}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography className={classes.text}>City</Typography>
                            <Typography noWrap={true} className={classes.subtext}
                                        color={"textSecondary"}>{props.event.venue.city}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container direction="row">
                        <Grid item xs={6}>
                            <Typography  className={classes.text}>Venue</Typography>
                            <Typography noWrap={false} className={classes.subtext}
                                        color={"textSecondary"}>{props.event.venue.name}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography className={classes.text}>Date</Typography>
                            <Typography noWrap={true} className={classes.subtext}
                                        color={"textSecondary"}>{dateFormat(props.event.datetime)}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}
