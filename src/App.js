import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PalindromeChecker from './components/palindrome_checker';
import SumFinder from './components/sum_finder';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <PalindromeChecker />
        <SumFinder />
      </div>
    );
  }
}

export default App;
