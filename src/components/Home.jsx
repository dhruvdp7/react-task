import React, { Component } from "react";
import Information from "./Information";
import { BrowserRouter as Router, Link, Redirect } from "react-router-dom";

class Home extends Component {
    // constructor(props) {
    //   super(props);
    //   this.state = {
    //   firstname: this.props.fname, 
    //   lastname: this.props.lname,
    //   email: this.props.email,
    //   mobileno: this.props.mobno,
    //   gender: this.props.gender,
    //   photo: this.props.photo
    //   }
    //   };
    
  render() {
    console.log(this.props.fname);
    return (
      <Router>
        <div className="information-wrapper container">
          <div className="row">
            <div className="col-md-2" />
            <div className="col-md-8">
              <h1>Home Page</h1>
              <div className="information">
                <div className="element">
                  <h3>Name : </h3>
                  <h5>
                    {this.props.fname} {this.props.lname}
                  </h5>
                </div>
                <div className="element">
                  <h3>Email : </h3>
                  <h5>{this.props.email}</h5>
                </div>
                <div className="element">
                  <h3>Mob No : </h3>
                  <h5>{this.props.mobileno}</h5>
                </div>
                <div className="element">
                  <h3>Gender : </h3>
                  <h5>{this.props.gender}</h5>
                </div>
                <div className="element">
                  <h3>Photo : </h3>
                  <img  src={this.props.photo} />
                </div>
              </div>
            </div>
            <div className="col-md-2" />
          </div>
        </div>
      </Router>
    );
  }
}
export default Home;
