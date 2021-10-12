import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Feed from "./features/feeds/Feed";
import FeedDetails from "./features/feeds/FeedDetails";

function App() {
  return (
    <Router>
      <div className="feed-container">
        <Switch>
          <Route exact path="/details/:username" component={FeedDetails} />
          <Route to="/" component={Feed} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
