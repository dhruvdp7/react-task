import React, { Component } from "react";
import Input from "./Input";
import Select from "./Select";

import { BrowserRouter as Router, Link, Redirect } from "react-router-dom";

class Information extends Component {
  constructor(props) {
    super(props);
    this.data = [];

    this.state = {
      nextPage: 0,
      prevPage: 0,
      firstname: "",
      lastname: "",
      email: "",
      // address: "",
      mobileno: "",
      gender: "male",
      photo: ""
    };
  }
  handleFname = event => {
    this.setState({
      firstname: event.target.value
    });
  };
  handleLname = event => {
    this.setState({
      lastname: event.target.value
    });
  };
  handleEmail = event => {
    this.setState({
      email: event.target.value
    });
  };
  handleMobileno = event => {
    this.setState({
      mobileno: event.target.value
    });
  };
  handleGender = event => {
    this.setState({
      gender: event.target.value
    });
  };
  // handleAddress = event => {
  //   this.setState({
  //     address: event.target.value
  //   });
  // };
  handleImage = event => {
    this.setState({
      photo: event.target.value
    });
  };
  handleSubmit = event => {
    this.props.onSelectLanguage(this.state);
    this.setState({
      nextPage: 1
    });
    // event.preventDefault();
    this.data.push(this.state);
    console.log(this.data);
    // localStorage.setItem("data", this.state);
  };
  handleBack = event => {
    this.setState({
      prevPage: 1
    });
    // event.preventDefault();
    this.data.push(this.state);
    console.log(this.data);
  };

  render() {
    if (this.state.nextPage == 1) {
      return <Redirect to="/home" />;
    }
    if (this.state.prevPage == 1) {
      return <Redirect to="/" />;
    }
    return (
      <Router>
        <div className="information-wrapper container">
          <div className="row">
            <div className="col-md-3" />
            <div className="col-md-6 form">
              <h1>Fill Information</h1>
              <form>
                <div className="form-group">
                  <Input
                    type="text"
                    value={this.state.firstname}
                    title="First Name"
                    placeholder="Enter First Name"
                    handleChange={this.handleFname}
                    className="form-control"
                    name="fname"
                  />
                </div>
                <div className="form-group">
                  <Input
                    type="text"
                    value={this.state.lastname}
                    title="Last Name"
                    placeholder="Enter Last Name"
                    handleChange={this.handleLname}
                    className="form-control"
                    name="lname"
                  />
                </div>
                <div className="form-group">
                  <Input
                    type="email"
                    value={this.state.email}
                    title="Email"
                    placeholder="Enter Email Address"
                    handleChange={this.handleEmail}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <Input
                    type="number"
                    value={this.state.mobileno}
                    title="Mobile No."
                    placeholder="Enter Mobile Number"
                    handleChange={this.handleMobileno}
                    className="form-control"
                  />
                </div>
                {/* <div className="form-group">
                <textarea
                  name="address"
                  value={this.state.address}
                  className="form-control"
                  handleChange={this.handleAddress}
                >
                  Address
                </textarea>
              </div> */}
                <div className="form-group">
                  <Select
                    title="Choose Gender"
                    name={"gender"}
                    value={this.state.gender}
                    handleChange={this.handleGender}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <Input
                    type="file"
                    title="Upload photo :"
                    handleChange={this.handleImage}
                  />
                </div>

                <div className="row">
                  <div className="col-md-3" />

                  <div className="form-group btnreset">
                    <Link to="/">
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={this.handleBack}
                      >
                        Back
                      </button>
                    </Link>
                  </div>

                  <div className="form-group">
                    <Link to="/home">
                      <button
                        type="submit"
                        class="btn btn-success"
                        onClick={this.handleSubmit}
                      >
                        Continue
                      </button>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
            <div class="col-md-3" />
          </div>
        </div>
      </Router>
    );
  }
}
export default Information;
