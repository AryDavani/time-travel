import React, { Component } from 'react';
import { ButtonToolbar, ButtonGroup, Button, FormGroup, ControlLabel, HelpBlock, FormControl } from 'react-bootstrap';
import DatePicker from 'react-bootstrap-date-picker';

class NewTrip extends Component {
  constructor() {
    super();

    this.state = {
      location: '',
      startDate: '',
      endDate: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    console.log("onChange fired", event.target);
  }

  render(){
    return(
      <div className="container outer-div">
        <div className="box">
          <h1 className="white-text">Start A New Trip!</h1>
          <form onChange={ this.handleChange }>
            <FormControl
              // onChange={ this.handleChange }
              value={ this.state.location }
              bsSize="lg"
              type="text"
              placeholder="Where are you going?"
            />

            <FormGroup>
              <ControlLabel className="white-text">Start Date</ControlLabel>
              <DatePicker
                showClearButton={ false }
                bsSize="lg"
                // onChange={ this.handleChange }
                // value={ this.state.startDate }
              />
            </FormGroup>

            <FormGroup>
              <ControlLabel className="white-text">End Date</ControlLabel>
              <DatePicker
                showClearButton={ false }
                bsSize="lg"
                // onChange={ this.handleChange }
                // value={ this.state.endDate }
              />
            </FormGroup>
            <Button bsSize="md">Start Trip!</Button>
          </form>
        </div>
      </div>
    )
  }
}

export default NewTrip;
