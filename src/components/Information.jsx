import React, { Component } from "react";
import Input from "./Input";

class Information extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      address: "",
      mobileno: ""
    };
  }

  render() {
    return (
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
                />
              </div>
              <div className="form-group">
                <Input
                  type="email"
                  value={this.state.email}
                  title="Email"
                  placeholder="Enter Email Address"
                  handleChange={this.handleLname}
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
              <div className="form-group">
                <Input
                  type="file"
                  // value={this.state.mobileno}
                  title="Upload photo :"
                  // placeholder="Enter Mobile Number"
                  // handleChange={this.handleMobileno}
                />
              </div>
              <div className="row">
                <div className="col-md-3" />

                <div className="form-group btnreset">
                  <button type="reset" className="btn btn-danger">
                    {" "}
                    Reset
                  </button>
                </div>

                <div className="form-group">
                  <button type="submit" class="btn btn-success">
                    Continue
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div class="col-md-3" />
        </div>
      </div>
    );
  }
}
export default Information;
