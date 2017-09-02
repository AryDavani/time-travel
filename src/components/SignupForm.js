import React, {Component} from 'react';
import { ButtonToolbar, ButtonGroup, Button, FormGroup, ControlLabel, HelpBlock, FormControl } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

export default class SignupForm extends Component {
  constructor() {
    super();
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
