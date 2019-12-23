import React, { Component } from 'react';
import './InputParser.css'
class InputParser extends Component {
  render() {
    const { inputtext } = this.props;
    let a = this.props.inputtext;
    console.log(a, "s")
    return (
      <>
        <textarea className="inputtextarea" rows={20} cols={50} value={inputtext} onChange={this.props.handleChange} />
      </>

    )
  }
}
export default InputParser;