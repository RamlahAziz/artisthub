//Fetches and displays all the events of a particular artist
//Is passed the artist object as props
//URL: /results/artistName/events/ page
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import ArtistDetails from "./ArtistDetails";
import Axios from "axios";
import ArtistEvents from "./ArtistEvents";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    text: {
        margin: 10,
        padding: 10,
        fontSize: 15,
        color: "#ffffff",
    },
    eventResultGrid: {
        alignItems: "flex-start",
        justifyContent: "stretch",
    },
    artistNameGrid: {
        alignItems: "flex-start",
        justifyContent: "stretch",
        flexFlow: "row wrap",
    },
    link: {
        fontWeight: 700,
        textDecoration: "none",
        color: "#ffffff",
    },
    flexbasisunset: {
        flexBasis: "auto",
    },
}));

export default function EventResults(props) {
    const location = useLocation();
    // console.log('event results location', location.state);
    // console.log('event results artist', props.artist);
    const classes = useStyles();

    // console.log('Event Artist Name', location.state.name);

    const [eventResults, setEventResults] = useState([]);

    useEffect(() => {
        const baseUrl = `https://rest.bandsintown.com`;
        const appId = "b2d0af8ea8bfb7288d2701b2d06e9eae";

        async function getArtistEvents(artistName) {
            try {
                const response = await Axios.get(
                    `${baseUrl}/artists/${artistName}/events?app_id=${appId}&date=upcoming`
                );
                const data = response.data;
                // console.log("Data returned from Events API: ", data);
                // eventResults.push(data);
                setEventResults(data);
                // console.log('Array of Search Results ', eventResults);

                // return data;
            } catch (error) {
                // If an error occurred we log it to the console
                console.error("Request Failed: ", error);
            }
        }

        //data fetching whenever searchterm changes
        getArtistEvents(location.state.name);
    }, [location.state]);

    return (
        <>
            <Grid
                container
                spacing={1}
                alignContent='flex-start'
                alignItems='flex-start'
                className={classes.artistNameGrid}
                direction='column'
                alignItems='flex-start'
            >
                <Grid item xs={3} className={classes.flexbasisunset}>
                    <Typography className={classes.text}>
                        <Link
                            to={`/results/${location.state.name}`}
                            className={classes.link}
                        >
                            <ArrowBackIosOutlinedIcon
                                style={{ fontSize: 10, margin: 0 }}
                            ></ArrowBackIosOutlinedIcon>
                            Back to Results
                        </Link>
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <ArtistDetails results={location.state}></ArtistDetails>
                </Grid>

                <Grid item xs={12}>
                    <Typography
                        className={classes.text}
                        color={"textSecondary"}
                        align={"left"}
                    >
                        {location.state.upcoming_event_count} upcoming event(s)
                    </Typography>
                </Grid>
            </Grid>

            <Grid container className={classes.eventResultGrid} direction='row'>
                {eventResults.map((record) => (
                    <Grid item xs key={record.id}>
                        <ArtistEvents event={record}></ArtistEvents>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}
