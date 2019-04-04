import React, { Component } from "react";
import Information from "./Information";
import { BrowserRouter as Router, Link, Redirect } from "react-router-dom";

class Home extends Component {
    constructor(props) {
      super(props);
    //   this.state = {
    //     nextPage: 0,
    //     prevPage: 0,
    //     firstname: "dhruv",
    //     lastname: "pande",
    //     email: "dhruvpande@qainfotech.com",
    //     mobileno: "8755088089",
    //     gender: "Male",
    //     photo: ""
    //   };
    }
  render() {
    console.log(this.props);
    return (
      <Router>
        <div className="information-wrapper container">
          {/* <div className="row">
            <div className="col-md-2" />
            <div className="col-md-8">
              <h1>Home Page</h1>
              <div className="information">
                <div className="element">
                  <h3>Name : </h3>
                  <h5>
                    {this.state.firstname} {this.state.lastname}
                  </h5>
                </div>
                <div className="element">
                  <h3>Email : </h3>
                  <h5>{this.state.email}</h5>
                </div>
                <div className="element">
                  <h3>Mob No : </h3>
                  <h5>{this.state.mobileno}</h5>
                </div>
                <div className="element">
                  <h3>Gender : </h3>
                  <h5>{this.state.gender}</h5>
                </div>
                <div className="element">
                  <h3>Photo : </h3>
                  <img />
                </div>
              </div>
            </div>
            <div className="col-md-2" />
          </div> */}
        </div>
      </Router>
    );
  }
}
export default Home;
