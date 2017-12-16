import React, { Component } from 'react';

export default class SumFinder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      sum: null
    }
  }


  onInputChange(event) {
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
        <input placeholder="Enter string of numbers (ex. 12345)" onChange={ this.onInputChange.bind(this) } value={this.state.input}/>
        <button onClick={this.state.input ? () => this.findSum(input) : null}>Calculate</button>
        <div className="text-container">
          <p>{this.state.sum}</p>
        </div>
      </div>
    )
  }
}
