import React, {Component} from 'react';
import { ButtonToolbar, ButtonGroup, Button, FormGroup, ControlLabel, HelpBlock, FormControl } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default class LoginForm extends Component {
  constructor() {
    super();
  }

  render(){
    return(
      <div className="container signup-div">
        <div className="signup-box">
          <ButtonGroup bsSize="lg">
            <Button bsStyle="default"><NavLink className="signup-buttons" to="/login">Login</NavLink></Button>
            <Button bsStyle="default"><NavLink className="signup-buttons" to="/signup">Signup</NavLink></Button>
          </ButtonGroup>
          <form>
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
              <Button bsSize="lg" type="submit">Login</Button>
            </ButtonGroup>
          </form>
        </div>
      </div>
    )
  }
}
