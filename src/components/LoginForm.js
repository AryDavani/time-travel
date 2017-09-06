import React, {Component} from 'react';
import { ButtonToolbar, ButtonGroup, Button, FormGroup, ControlLabel, HelpBlock, FormControl } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {login} from '../actions/actions.js';
import { withRouter } from 'react-router';

class LoginForm extends Component {
  constructor() {
    super();

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentWillMount(){
    this.props.authenticated ? this.props.history.push('/') : null
  }

  componentWillReceiveProps(nextProps) {
    nextProps.authenticated ? this.props.history.push('/') : null
  }

  handleFormSubmit(event){
    event.preventDefault();

    let object = {};

    object['email'] = event.target.email.value;
    object['password'] = event.target.password.value;

    this.props.login(object);
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
          <form onSubmit={ this.handleFormSubmit }>
            <FormControl
              name="email"
              bsSize="lg"
              type="email"
              placeholder="Email Address"
            />
            <FormControl
              name="password"
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

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({login}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
