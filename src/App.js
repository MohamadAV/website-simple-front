import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { Footer } from "./components/Footer";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Products from './components/Products';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Switch>
          <Route path="/products" component={Products}/>
          <Route path="/" component={Landing} />
        </Switch>

        <Footer />
      </Fragment>
    );
  }
}

export default App;
