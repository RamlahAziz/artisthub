import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import {Grid} from "@material-ui/core";
import ArtistDetails from "./ArtistDetails";
import EventResults from "./EventResults";
import Skeleton from "@material-ui/lab/Skeleton";
import { useHistory } from "react-router-dom";

import Axios from "axios";

const useStyles = makeStyles((theme) => ({
    text: {
        margin: 10,
        textAlign: "left",
        padding: 10,
    },
    artistResultGrid: {
        alignContent: "flex-start",
        alignItems: "flex-start",
        flexFlow: "row wrap",
    },
    root: {
        display: "flex",
        flexWrap: 'wrap',
        alignItems: "left",
        width: 'fill',
    }

}));

export default function SearchResults(props) {

    const classes = useStyles();
    let history = useHistory();

    // console.log('searchterm',props);

    //let count = 0;
    //let temp = []
    const [searchResults, setSearchResults] = useState([]);
    const [showArtistResults, setShowArtistResults] = useState(true);
    const [selectedArtist, setSelectedArtist] = useState("");
    const [loading, setLoading] = React.useState(true);
    //using a proxy to avoid cors errors
    const baseUrl = `https://rest.bandsintown.com`;
    const appId = "b2d0af8ea8bfb7288d2701b2d06e9eae";



    useEffect(() => {
        //data fetching whenever search term changes

        let refinedSearchTerm = props.searchTerm;
        if (refinedSearchTerm.includes(" ")) {
            refinedSearchTerm = refinedSearchTerm.replace(/\s/g, "");
        }
        if (!refinedSearchTerm || refinedSearchTerm.length === 0) {
            //ask user for proper input
            searchResults.length=0;
            setSearchResults([]);
            console.log('empty input')
        } else {
            searchResults.length=0;
            setSearchResults([]);
            searchArtists(refinedSearchTerm).then();
        }

    }, [props.searchTerm]);

    function handleClick(e, record) {
        e.preventDefault();
        console.log('onClick called', record);
        setShowArtistResults(false);
        setSelectedArtist(record);
        // history.push("/events/"+props.searchTerm);
    };

    async function searchArtists(searchValue) {
        try {
            const response = await Axios.get(
                `${baseUrl}/artists/${searchValue}?app_id=${appId}`,
            );
            const data = response.data;
            console.log("Data returned from API: ", data);
            if (!data || data.length === 0 || data.hasOwnProperty("error")) {
                //json object not valid
            } else {
                searchResults.push(data);
                setSearchResults(searchResults)
            }

            console.log('LATE Array of Search Results ', searchResults);

            setLoading(false);
            // return data;
        } catch (error) {
            // If an error occurred we log it to the console
            console.error("Request Failed: ", error);
        }
    }

    return (
        loading ?
            <div className={classes.root}>
                <Skeleton animation="wave" variant="text"/>
                <Skeleton animation="wave" variant="rect"/>
            </div> :
            showArtistResults ?
                <div>

                    <Grid className={classes.artistResultGrid} container direction="row" alignItems="flex-start">
                        <Grid className={classes.artistResultGrid} item xs={12}>
                            <Typography className={classes.text}>
                                {/*make this depend on input*/}
                                {searchResults.length} result(s) found for "{props.searchTerm}"
                            </Typography>
                        </Grid>
                        {searchResults.map((record) => (
                            <Grid item key={record.name} xs onClick={(e) => handleClick(e, record)}>
                                <ArtistDetails key={record.id} results={record}></ArtistDetails>
                            </Grid>

                        ))}
                    </Grid>
                </div> :

                <div>
                   <Grid container direction="row" alignItems="flex-start">
                        <EventResults artist={selectedArtist}></EventResults>
                    </Grid>
                </div>
    );
}

