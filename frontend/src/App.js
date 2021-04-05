import React, { Component } from "react";
import NavBar from "./components/navBar";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar></NavBar>
      </React.Fragment>
    );
  }
}

export default App;
