import React, { Component } from 'react';
import ReusableInput from './reusable_input';

export default class EvenOrOdd extends Component {
  constructor(props) {
    super(props);
    this.state={
      number: '',
      bool: false
    }

    this.handleInputChange = this.handleInputChange.bind(this);

  }

  handleInputChange(event) {
    this.setState({
      number: event.target.value
    })
  }

  handleDivision(num){
    let quotient = num % 2;
    !quotient ? this.setState({number: '', bool: true}) : this.setState({number: '', bool: false})
  }

  render(){
    return (
      <div className="component-container">
        <h1>Even or Odd</h1>
        <ReusableInput
        text="Enter number here..."
        input={this.state.number}
        handleInputChange={this.handleInputChange}
        handleClick={this.handleDivision.bind(this, this.state.number)}
        btnLabel="Compute"
        />
        <div className="text-container">
          <p>{this.state.bool ? "Even" : "Odd"}</p>
        </div>
      </div>
    )
  }
}
