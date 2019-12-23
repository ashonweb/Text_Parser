import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputParser from './InputParser';
import OutputParser from './OutputParser';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputtext: ""
    }
  }
  handleChange = (e) => {
    this.setState({
      inputtext: e.target.value,
    })
    console.log(this.state.inputtext)

  }

  isValidURL = (string) => {
    console.log("bhagya")
    // var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    var res = string.match(/^http(s)?:\/\/[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/)
    return (res !== null)
  };
  render() {
    return (
      <>
      <h2>Text Parser</h2>
      <div className="App">
        <InputParser inputtext={this.state.inputtext} handleChange={this.handleChange} />
        <OutputParser inputtext={this.state.inputtext} isValidURL={this.isValidURL} />
      </div>
      </>
    );
  }
}

export default App;
