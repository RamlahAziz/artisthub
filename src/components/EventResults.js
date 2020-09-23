import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {Grid} from "@material-ui/core";
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import ArtistDetails from "./ArtistDetails";
import Axios from "axios";
import ArtistEvents from "./ArtistEvents";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
    text: {
        margin: 10,
        padding: 10,
        fontSize: 15,
    },

}));

export default function EventResults(props) {

    const classes = useStyles();

    console.log('Event Artist Name', props.artist.name);

    const [eventResults, setEventResults] = useState([]);
    //using a proxy to avoid cors errors
    const baseUrl = `https://rest.bandsintown.com`;
    const appId = "b2d0af8ea8bfb7288d2701b2d06e9eae";


    useEffect(() => {
        //data fetching whenever searchterm changes
        getArtistEvents(props.artist.name);

    }, [props.artist]);


    async function getArtistEvents(artistName) {
        try {
            const response = await Axios.get(
                `${baseUrl}/artists/${artistName}/events?app_id=${appId}&date=upcoming`,
            );
            const data = response.data;
            console.log("Data returned from Events API: ", data);
            // eventResults.push(data);
            setEventResults(data)
            console.log('Array of Search Results ', eventResults);

            // return data;
        } catch (error) {
            // If an error occurred we log it to the console
            console.error("Request Failed: ", error);
        }
    }

    return (
        <div>
            <Grid container direction="column" alignItems="flex-start">

                <Grid container spacing={1} direction="row" alignItems="flex-start" al>
                    <Grid item>
                        <ArrowBackIosOutlinedIcon style={{ fontSize: 15 }}></ArrowBackIosOutlinedIcon>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.text}>
                            <Box fontWeight="fontWeightLight">Back to results</Box>
                        </Typography>
                    </Grid>
                </Grid>


                <Grid item xs={12} alignContent={"flex-start"}>
                    <ArtistDetails results={props.artist}></ArtistDetails>
                </Grid>

                <Grid item xs={12}>
                    <Typography className={classes.text}>
                        {props.artist.upcoming_event_count} upcoming event(s)
                    </Typography>
                </Grid>

            </Grid>

            <Grid container direction="row" alignItems="flex-start">
                {eventResults.map((record) => (
                    <Grid item xs="4">
                        <ArtistEvents event={record}></ArtistEvents>
                    </Grid>

                ))}
            </Grid>

        </div>
    );
}

