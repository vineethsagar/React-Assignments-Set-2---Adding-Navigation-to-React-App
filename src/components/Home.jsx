import React, { Component } from "react";
import LocationDisplay from "./LocationDisplay";
class Home extends Component {
  render() {
    return (
      <>
        <h1>You are home</h1>
        <LocationDisplay />
      </>
    );
  }
}
export default Home;
