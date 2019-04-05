import React, { Component } from "react";
class Select extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="form-element">
        <label htmlFor={this.props.name}> {this.props.title} </label>
        <select value={this.props.value} onChange={this.props.handleChange} className={this.props.className}>
         
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
      </div>
    );
  }
}

export default Select;
