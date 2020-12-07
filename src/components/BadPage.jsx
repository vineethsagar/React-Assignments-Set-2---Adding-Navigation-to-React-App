import React, { Component } from "react";
import LocationDisplay from "./LocationDisplay";
// import LocationDisplay from "./LocationDisplay";
class BadPage extends Component {
  render() {
    return (
      <>
        <h1>No match</h1>
        <LocationDisplay />
      </>
    );
  }
}
export default BadPage;
