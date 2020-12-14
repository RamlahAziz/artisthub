//Handles user input and triggers search function
// calls the url /results/searchTerm

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { Grid } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "flex-start",
        width: "fill",
    },
    paper: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "left",
        width: "fill",
    },
    iconButton: {
        padding: 10,
    },
    textField: {
        margin: theme.spacing(1),
        width: "fill",
    },
    //========================== how to get border color on focus to change??
    input: {
        outlineColor: "#000000",
        color: "secondary",
        borderColor: "#80bdff",
        // '&$focused':{
        //     borderColor: '#80bdff'
        // }
    },
    grid: {
        //paddingLeft: theme.spacing(12),
    },
}));

export default function SearchBar(props) {
    let history = useHistory();

    const classes = useStyles();
    const [searchTerm, setSearchTerm] = useState(props.searchTerm); //props.artistName
    const [userInput, setUserInput] = useState();
    // const [showResults, setShowResults] = useState();

    function handleChange(e) {
        // e.preventDefault();
        setUserInput(e.target.value);
        let input = e.target.value.replace(/\s/g, "");
        setSearchTerm(input);
        //setShowResults(true);
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            search(e);
        }
    };

    const search = (e) => {
        e.preventDefault();
        // setShowResults(true);
        if (searchTerm || searchTerm.length > 0) {
            history.push("/results/" + searchTerm);
        }
    };

    const handleMouseDown = (event) => {
        event.preventDefault();
    };

    return (
        <Grid container direction={"column"} className={classes.root}>
            <Grid item xs={12} className={classes.grid}>
                <FormControl className={classes.textField} variant='outlined'>
                    <Paper className={classes.paper} elevation={2}>
                        <OutlinedInput
                            classes={{ focused: classes.input }}
                            id='search-artist-input'
                            type='text'
                            placeholder='Search Artist Name'
                            value={userInput}
                            required={true}
                            onChange={(e) => handleChange(e)}
                            onKeyPress={(e) => handleKeyPress(e)}
                            endAdornment={
                                <InputAdornment position='end'>
                                    <IconButton
                                        aria-label='search icon'
                                        onClick={search}
                                        //onMouseDown={}
                                        aria-autocomplete={"both"}
                                        onMouseDown={handleMouseDown}
                                        edge='end'
                                    >
                                        <SearchIcon />
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </Paper>
                </FormControl>
            </Grid>
        </Grid>
    );
}
