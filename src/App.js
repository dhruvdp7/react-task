import React, { Component } from "react";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Information from "../src/components/Information";
import Home from "./components/Home";

class App extends Component {
  handleLanguage = event => {
    this.setState({
      
    });}

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Login} />
          <Route path="/information" component={Information} />
          <Route path="/home" component={Home} onSelectLanguage={this.handleLanguage}  />
        </div>
      </Router>
    );
  }
}
export default App;
