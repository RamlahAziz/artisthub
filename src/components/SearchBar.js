import React, {useState, useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import ArtistDetails from "./ArtistDetails";
import ArtistEvents from "./ArtistEvents.js";
import Typography from "@material-ui/core/Typography";
import {Grid} from "@material-ui/core";
import SearchResults from "./SearchResults.js";
import Axios from "axios";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "2px 4px",
        display: "flex",
        alignItems: "left",
        width: 800,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    focused: {
        borderColor: "#000000"
    },
}));

export default function SearchBar() {

    const classes = useStyles();
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState(false);

    function handleChange(e) {
        e.preventDefault();
        setSearchTerm(e.target.value);
        setSearchResults(true);

        console.log('onChange search term', searchTerm);
    }

    function search(e) {
        e.preventDefault();
        setSearchResults(true);
        console.log('search results bool', searchResults);
    }

    return (
        <Grid container direction="column" alignItems="flex-start">
            <Grid item xs={12}>
                <Paper component="form" className={classes.root}>
                    <InputBase
                        className={classes.input}
                        margin="dense"
                        placeholder="Search Artist Name"
                        type="text"
                        value={searchTerm}
                        onChange={(e) => handleChange(e)}
                        onSubmit={(e) => search(e)}
                        inputProps={{'aria-label': 'search artist name'}}
                    />
                    <IconButton
                        type="button"
                        className={classes.iconButton}
                        onClick={(e) => search(e)}
                        aria-label="search"
                    >
                        <SearchIcon/>
                    </IconButton>
                </Paper>
            </Grid>

            <Grid item xs={12}>
                {searchResults ? <SearchResults searchTerm={searchTerm}/> : null}
            </Grid>
        </Grid>
    );
}
