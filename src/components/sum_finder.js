import React, { Component } from 'react';
import ReusableInput from './reusable_input';

export default class SumFinder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      sum: null
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }


  handleInputChange(event) {
    this.setState({ input: event.target.value });
  }

  findSum(str) {
    let sum = str.split('').reduce((curr,next) => Number(curr) + Number(next), 0);
    this.setState({ input: [], sum });
  }

  render() {
    let input = this.state.input;

    return (
      <div className="component-container">
        <h1>Sum Finder</h1>
        <ReusableInput
          text="Enter string of numbers (ex. 12345)"
          input={this.state.input}
          handleInputChange={this.handleInputChange}
          />
        <button onClick={this.state.input ? () => this.findSum(input) : () => console.log("suck it!")}>Calculate</button>
        <div className="text-container">
          <p>{this.state.sum}</p>
        </div>
      </div>
    )
  }
}
