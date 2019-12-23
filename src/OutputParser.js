import React, { Component } from 'react';
import './OutputParser.css'

class OutputParser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      outputtext: ''
    }
  }

  render() {
    let isUrl = this.props.isValidURL(this.props.inputtext);
    if (isUrl) {
      if (this.props.inputtext.match(/.(jpg|png|jpeg)$/) !== null) {
        return (
          <img src={this.props.inputtext} />
        );
      }
      return (
        <a className="outputhref" href={this.props.inputtext}>{this.props.inputtext}</a>
      );
    }
    return (
      <textarea value={this.props.inputtext} className="outputtextarea" rows={20} cols={50} />
    );
  }
}
export default OutputParser;