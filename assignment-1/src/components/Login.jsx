import React, { Component } from "react";
import Input from "./Input";
import logo from "../assets/images/qalogo.jpg";
import logincard from "../assets/images/login2.jpg";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Information from "../components/Information";
// import App from "../App";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  nextStep = event => {
    event.preventDefault();
    let details = this.state;

    if (details.username == "qainfotech" && details.password == "qainfotech") {
      window.location = "/adminView";
    } else if (details.username == "" || details.password == "") {
      alert("Either of the fields missing");
      this.setState({
        username: "",
        password: ""
      });
    } else {
      alert("Invalid Username or Password");
      this.setState({
        username: "",
        password: ""
      });
    }
  };

  reset = () => {
    this.setState({
      username: "",
      password: ""
    });
  };

  handleUsername = event => {
    this.setState({
      username: event.target.value
    });
  };

  handlePassword = event => {
    this.setState({
      password: event.target.value
    });
  };

  handleReset = event => {
    this.setState({
      username: "",
      password: ""
    });
  };

  render() {
    return (
      // <Router>
      //   <Route exact path="/reset" component={Information} />
        <div className="container">
          <div className="row">
            <div className="col-md-3" />
            <div className="col-md-6 container--form">
              <div className="image-logo">
                <img className="logo" src={logo} />
              </div>
              <div className="image-login" />
              <img className="logincard" src={logincard} />
              <form>
                <div className="form-group">
                  <Input
                    type={"text"}
                    title={"Username : "}
                    value={this.state.username}
                    name={"username"}
                    placeholder={"Enter Username"}
                    handleChange={this.handleUsername}
                    className={"form-control"}
                  />
                </div>
                <div className="form-group">
                  <Input
                    type={"password"}
                    title={"Password : "}
                    value={this.state.password}
                    name={"password"}
                    placeholder={"Enter Password"}
                    handleChange={this.handlePassword}
                    className={"form-control"}
                  />
                </div>
                <div className="form-group button-group">
                  <button
                    type="submit"
                    className="btn btn-success"
                    onClick={this.nextStep}
                  >
                    Continue
                  </button>
                  <Link to="/reset">
                    <button
                      type="reset"
                      className="btn btn-danger"
                      onClick={this.reset}
                    >
                      Reset
                    </button>
                  </Link>
                </div>
              </form>
            </div>

            <div className="col-md-3" />
          </div>
        </div>
      // </Router>
    );
  }
}

export default Login;
