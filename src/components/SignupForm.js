import React, { Component } from 'react';
import { ButtonToolbar, ButtonGroup, Button, FormGroup, ControlLabel, HelpBlock, FormControl } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signup } from '../actions/actions.js';

export default class SignupForm extends Component {
  constructor() {
    super();

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(event){
    event.preventDefault();

    let object = {};
    object['username'] = event.target.username.value;
    object['password'] = event.target.password.value;

    this.props.signup(JSON.stringify(object));

    event.target.reset();
  }
  render(){
    return(
      <div className="container outer-div">
        <div className="box">
          <ButtonGroup bsSize="lg">
            <Button bsStyle="default"><NavLink className="signup-buttons" to="/login">Login</NavLink></Button>
            <Button bsStyle="default"><NavLink className="signup-buttons" to="/signup">Signup</NavLink></Button>
          </ButtonGroup>
          <form className="signup-login-form">
            <FormGroup>
              <FormControl
                bsSize="lg"
                type="text"
                placeholder="First Name"
              />
              <FormControl
                bsSize="lg"
                type="text"
                placeholder="Last Name"
              />
            </FormGroup>
            <FormControl
              bsSize="lg"
              type="email"
              placeholder="Email Address"
            />
            <FormControl
              bsSize="lg"
              type="password"
              placeholder="Password"
            />
            <ButtonGroup vertical block>
              <Button bsSize="lg" type="submit">Create Account</Button>
            </ButtonGroup>
          </form>
        </div>
      </div>
    )
  }
}
