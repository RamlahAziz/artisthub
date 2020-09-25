import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar.js";
import SearchResults from "./components/SearchResults";
import background from "./images/background2.jpg";
import EventResults from "./components/EventResults";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    //Link,
    useParams
} from "react-router-dom";
import {Grid} from "@material-ui/core";

function App() {
  return (
    <div className="App" >
        {/*<div>*/}
        {/*    /!*<img src={background}/>*!/*/}
        {/*    <SearchBar />*/}
        {/*</div>*/}

        <Router>
            <Switch>
                <Route exact path="/">
                    <SearchBar searchTerm={""}/>
                </Route>
                <Route
                    exact
                    path="/results/:artist"
                    children={<Child />}
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
        return(

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

    function Child2(record) {
        let artist = useParams();
        return(
            <div>
                <Grid container direction="row" alignItems="flex-start">
                    <EventResults artist={record}></EventResults>
                </Grid>
            </div>
        );
    }
}
export default App;
