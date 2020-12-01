import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import Home from "./components/Home";
function generateCodeFromObject(obj) {
  //return a code generated string
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
module.exports = generateCodeFromObject;
