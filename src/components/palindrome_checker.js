import React, { Component } from 'react';
import './../styles/style.css';
import ReusableInput from './reusable_input';

export default class PalindromeChecker extends Component {
  constructor(props){
    super(props);
      this.state = ({
        input: '',
        word: '',
        palindrome: false
      })

      this.checkForPalindrome = this.checkForPalindrome.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      input: event.target.value
    })
  }

  checkForPalindrome(str) {
    let wordSplit = str.toLowerCase().split('')
    let str1 = wordSplit.join('');
    let str2 = wordSplit.reverse().join('');
    let bool = str1 === str2 ? true : false
    this.setState({
      input: '',
      word: str,
      palindrome: bool
    })
  }

  render() {

    let text = this.state.input

    return (
      <div className="component-container">
        <h1>Palindrome Checker</h1>
        <ReusableInput
          text="Enter word here."
          input={this.state.input}
          handleInputChange={this.handleInputChange.bind(this)}
          btnLabel="Submit"
          handleClick={this.checkForPalindrome.bind(this, text)}
          />
          <div className="text-container">
          <p>{!this.state.word ? null : this.state.palindrome && this.state.word ? `${this.state.word} is a palindrome!` : `${this.state.word} is not a palindrome.`}</p>
          </div>
      </div>
    )
  }
}
