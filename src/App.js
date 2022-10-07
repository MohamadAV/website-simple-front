import React, { Component, Fragment } from "react";
import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Banner />
        <Cards/>
        <Search/>
      </Fragment>
    );
  }
}

export default App;
