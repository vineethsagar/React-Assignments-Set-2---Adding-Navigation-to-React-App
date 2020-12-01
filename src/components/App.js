import React, { Component, useState } from "react";
import { Link, Route, Switch, useHistory } from "react-router-dom";
import "../styles/App.css";
import Home from "./Home";
import About from "./About";
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
            <Route path="/" render={() => <h3>No match</h3>} />
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
