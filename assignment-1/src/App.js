import React, { Component } from "react";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {
  render() {
    return (
      // // <Router>  
      //   {/* <Route exact path="/reset" component={Information} /> */}
      //   // <Route path="/" component={Login} />
        <div className="App">
          <Login />
        </div>
      // </Router>
    );
  }
}
export default App;
