import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import {Grid} from "@material-ui/core";
import SearchResults from "./SearchResults.js";
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: 'wrap',
        alignItems: "flex-start",
        width: 'fill',
        backgroundColor: "aliceblue",
        paddingTop: theme.spacing(12),
        paddingLeft: theme.spacing(12),
    },
    paper:{
        display: "flex",
        flexWrap: 'wrap',
        alignItems: "left",
        width: 'fill',
    },
    iconButton: {
        padding: 10,
    },
    textField: {
        margin: theme.spacing(1),
        width: 'fill',
    },
    //========================== how to get border color on focus to change??
    input: {
        outlineColor:'#000000',
        color:'secondary',
        borderColor: '#80bdff',
        '&$focused':{
            borderColor: '#80bdff'
        }
    },
    grid: {
        //paddingLeft: theme.spacing(12),
    }

}));

export default function SearchBar() {

    const classes = useStyles();
    const [searchTerm, setSearchTerm] = useState("");
    const [showResults, setShowResults] = useState(false);

    function handleChange(e) {
        // e.preventDefault();
        let input = e.target.value;
        setSearchTerm(input);
        setShowResults(true);
        // one step late
        // console.log('onChange search term', searchTerm);
    }

    const search = (e) => {
        e.preventDefault();
        setShowResults(true);
        // one step late
        // console.log('search results bool', searchResults);
    }

    const handleMouseDown = (event) => {
        event.preventDefault();
    };

    return (
        <Grid container direction={"column"} className={classes.root}>
            <Grid item xs={12} className={classes.grid}>
                <FormControl className={classes.textField} variant="outlined">
                    <Paper className={classes.paper} elevation={2}>
                        <OutlinedInput classes={{focused : classes.input}}
                            id="search-artist-input"
                            type= 'text'
                            placeholder = 'Search Artist Name'
                            value={searchTerm}
                            onChange={(e) => handleChange(e)}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="search icon"
                                        onClick={search}
                                        //onMouseDown={}
                                        aria-autocomplete={"both"}
                                        onMouseDown={handleMouseDown}
                                        edge="end"
                                    >
                                        <SearchIcon />

                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </Paper>
                </FormControl>
            </Grid>
            <Grid item xs={12} className={classes.grid}>
                {showResults ? <SearchResults searchTerm={searchTerm} showResults={showResults}/> : null}
            </Grid>
        </Grid>
    );
}
