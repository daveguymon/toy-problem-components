import React, { Component } from 'react';
import './../styles/style.css';

export default class PalindromeChecker extends Component {
  constructor(props){
    super(props);
      this.state = ({
        input: '',
        word: '',
        palindrome: false
      })
  }

  onInputChange(event) {
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

    let inputString = this.state.input

    return (
      <div className="component-container">
        <h1>Palindrome Checker</h1>
        <input placeholder="Enter text string here." value={this.state.input} onChange={this.onInputChange.bind(this)}/>
        <button onClick={() => this.checkForPalindrome(inputString)}>Submit</button>
        <div className="text-container">
          <p>{!this.state.word ? null : this.state.palindrome && this.state.word ? `${this.state.word} is a palindrome!` : `${this.state.word} is not a palindrome.`}</p>
        </div>
        {this.state.palindrome}
      </div>
    )
  }
}
