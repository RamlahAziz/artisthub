import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
import CardContent from "@material-ui/core/CardContent";
import {red} from "@material-ui/core/colors";
import Typography from "@material-ui/core/Typography";
import {Grid, TableCell, TableHead, TableRow} from "@material-ui/core";
import ArtistDetails from "./ArtistDetails";
import EventResults from "./EventResults";
import Skeleton from "@material-ui/lab/Skeleton";
import Axios from "axios";
import {Router} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    text: {
        margin: 10,
        textAlign: "left",
        padding: 10,
    },

}));

export default function SearchResults(props) {

    const classes = useStyles();

    // console.log('searchterm',props);

    let count = 0;
    let temp = []
    const [searchResults, setSearchResults] = useState([]);
    const [showArtistResults, setShowArtistResults] = useState(true);
    const [selectedArtist, setSelectedArtist] = useState("");
    const [loading, setLoading] = React.useState(true);
    //using a proxy to avoid cors errors
    const baseUrl = `https://cors-anywhere.herokuapp.com/https://rest.bandsintown.com`;
    const appId = "b2d0af8ea8bfb7288d2701b2d06e9eae";


    useEffect(() => {
        //data fetching whenever searchterm changes
        searchArtists(props.searchTerm);

    }, [props.searchTerm]);

    function handleClick(e, record) {
        e.preventDefault();
        console.log('onClick called', record);
        setShowArtistResults(false);
        setSelectedArtist(record);
    };

    async function searchArtists(searchValue) {
        try {
            const response = await Axios.get(
                `${baseUrl}/artists/${searchValue}?app_id=${appId}`,
                {
                    headers: {
                        "accept": "application/json",
                        "Content-Type": "application/x-www-form-urlencoded",
                        "X-Requested-With": "XMLHttpRequest",
                        "Access-Control-Allow-Origin": "*",
                    },
                }
            );
            const data = response.data;
            console.log("Data returned from API: ", data);
            searchResults.push(data);
            setSearchResults(searchResults)
            console.log('Array of Search Results ', searchResults);

            setLoading(false);
            // return data;
        } catch (error) {
            // If an error occurred we log it to the console
            console.error("Request Failed: ", error);
        }
    }

    return (
        loading ?
            <div>
                <Skeleton animation="wave" variant="text"/>
                <Skeleton animation="wave" variant="rect"/>
            </div> :
            showArtistResults ?
                <div>
                    <Grid container direction="row" alignItems="flex-start">
                        <Grid item xs={12}>
                            <Typography className={classes.text}>
                                {searchResults.length} result(s) found for "{props.searchTerm}"
                            </Typography>
                        </Grid>
                        {searchResults.map((record) => (
                            <Grid item xs={4} onClick={(e) => handleClick(e, record)}>
                                <ArtistDetails results={record}></ArtistDetails>
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

