import React, { Component } from 'react';
class Input extends Component {
//     constructor(props){
//         super(props);
   
// }

    render(){
        return(
            <div className="form-element">
            <label htmlFor={this.props.name} className="form-label">{this.props.title}</label>
            <input type={this.props.type}
            name={this.props.name} 
            onChange={this.props.handleChange}
            placeholder={this.props.placeholder}
            value={this.props.value}
            className={this.props.className}
            />
            </div>

        )
    }

    }


export default Input;