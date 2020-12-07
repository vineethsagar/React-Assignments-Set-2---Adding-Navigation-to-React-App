/* import React, { Component, useState } from "react";
import { Link, Route, Switch, useHistory } from "react-router-dom";
import "../styles/App.css";
import Home from "./Home";
import About from "./About";
// import LocationDisplay from "./LocationDisplay";
import BadPage from "./BadPage";
class App extends Component {
  render() {
    return (
      <>
        <div id="main">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route path="/" component={BadPage} />
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
 */

import React, { Component, useState } from "react";
import "../styles/App.css";
import { Switch, Route, Link, useLocation } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div id="main">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        <Switch>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
        <LocationDisplay />
      </div>
    );
  }
}

function Home(props) {
  return (
    <>
      <h3>You are home</h3>
    </>
  );
}

function About(props) {
  return (
    <>
      <h3>You are on the about page</h3>
    </>
  );
}
function PageNotFound(props) {
  return (
    <>
      <h3>No match</h3>
    </>
  );
}

export function LocationDisplay() {
  let loc = useLocation();
  //console.log("rendering location",location);
  return <div data-testid="location-display">{loc.pathname}</div>;
}

export default App;
