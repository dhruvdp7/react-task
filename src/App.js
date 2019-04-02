import React, { Component } from "react";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Information from "../src/components/Information";

class App extends Component {
  render() {
    return (
      <Router>  
        <div className="App">
        <Route exact path="/" component={Login} />
        <Route path="/information" component={Information} />
        </div>
       </Router>
    );
  }
}
export default App;
