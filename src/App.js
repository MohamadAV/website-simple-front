import React, { Component, Fragment } from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Banner />
      </Fragment>
    );
  }
}

export default App;
