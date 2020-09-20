import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar.js";
import ArtistDetails from "./components/ArtistDetails.js";
import EventResults from "./components/EventResults";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <SearchBar />
        <Router>
            <Switch>
                {/* <Route path="/" component={SearchBar} /> */}
                <Route
                    path="/results/:artist"
                    children={<Child />}
                />
            </Switch>
        </Router>
    </div>
  );

    function Child() {
        // We can use the `useParams` hook here to access
        // the dynamic pieces of the URL.
        let {artist} = useParams();

        return (
            <div>
                <EventResults results={artist}></EventResults>
            </div>
        );
    }
}
export default App;
