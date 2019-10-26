import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./Home";
import Page1 from "./Page1";
import Page2 from "./Page2";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
      </div>
    );
  }
}

export default App;
