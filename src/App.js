import React from "react";
import SearchBar from "./components/SearchBar.js";
import SearchResults from "./components/SearchResults";
import EventResults from "./components/EventResults";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    //Link,
    useParams
} from "react-router-dom";
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme) => ({

    App: {
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        padding: theme.spacing(4),
        // paddingLeft: "auto",
        // paddingRight: "auto",
        // overflow: "hidden",
        backgroundColor: "#D8D3D0",
    },
    SearchBar: {
        // margin: "0 50%",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        width:"100%",
    },
    DivContainer: {
        justifyContent: "center",
        alignItems: "center",
        alignContent:"center",
        flexDirection: "column",
        padding: theme.spacing(2),
    },
    landing: {
        backgroundColor: "#D8D3D0",
        padding: theme.spacing(12),
        justifyContent: "center",
        alignItems: "center",
        alignContent:"center",
        flexDirection: "column",
    }

}));

function App() {

const classes = useStyles();
    return (
        <div className={classes.App}>

            <Router>
                <Switch>
                    <Route exact path="/">
                        <div className={classes.landing}>
                            <div className={classes.DivContainer}>
                                <Typography variant={"h4"}>Enter your favourite artist's name</Typography>
                            </div>
                            <div className={classes.DivContainer}>
                                <SearchBar className={classes.SearchBar} searchTerm={""}
                                />
                            </div>
                        </div>


                        {/*<SearchBar searchTerm={""}/>*/}
                    </Route>
                    <Route exact path="/artisthub">
                        <Redirect to="/"/>
                    </Route>
                    <Route
                        exact
                        path="/results/:artist"
                        children={<Child/>}
                    />
                    <Route
                        exact
                        path={"/results/:artist/events"}
                        children={<Child2/>}/>

                </Switch>
            </Router>
        </div>
    );

    function Child() {
        // We can use the `useParams` hook here to access
        // the dynamic pieces of the URL.
        let {artist} = useParams();
        return (

            <Grid container direction={"column"}>
                <Grid item xs={12}>
                    <SearchBar searchTerm={artist}/>

                </Grid>
                <Grid item xs={12}>
                    <SearchResults searchTerm={artist}/>

                </Grid>
            </Grid>


        );
    }

    function Child2() {
        let artist = useParams();
        return (
                <Grid container direction="row" alignItems="flex-start">
                    <EventResults artist={artist}/>
                </Grid>
        );
    }
}

export default App;
