import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class Homepage extends Component {
  constructor() {
    super();
  }

  render(){
    return(
      <div>
        <div>
          <NavLink to="newtrip"><Button bsSize="lg">New Trip</Button></NavLink>
        </div>

      </div>
    )
  }
}

export default Homepage;
