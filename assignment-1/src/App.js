import React, { Component } from "react";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Information from "../src/components/Information";
import Home from "./components/Home";

class App extends Component {
    constructor(){
      super();
      this.state={
        firstname: "" ,
        lastname: "",
        email: "",
        mobileno: "",
        gender: "",
        photo: ""
      }
    }

  onSubmitClick(fname,lname,email,mob,gender,photo){
    console.log(fname);
   this.setState({
     firstname:fname,
     lastname:lname,
     email:email,
     mobileno:mob,
     gender:gender,
     photo:photo

   });
   console.log(fname);

  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Login} />
          <Route path="/information" render={(props)=>(<Information {...props} renderDetails={this.onSubmitClick.bind(this)} />)}/>
          <Route path="/home"  render={(props)=>(<Home {...props} fname={this.state.firstname} lname={this.state.lastname} email={this.state.email} gender={this.state.gender} mobileno={this.state.mobileno} photo={this.state.photo} />)} />
        </div>
      </Router>
    );
  }
}
export default App;
