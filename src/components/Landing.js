import React, { Component } from "react";
import { Fragment } from "react";
import {Logos}  from "./Logos";
import Banner from "./Banner";
import Cards from "./Cards";
import Search from "./Search";

export default class Landing extends Component {
  render() {
    return (
      <Fragment>
        <Banner />
        <Cards />
        <Search />
        <Logos />
      </Fragment>
    );
  }
}
