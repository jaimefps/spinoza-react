import React from 'react';
import '../assets/invalidinput.css';

export default class InvalidInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
  console.log('prompt props', this.props);
    return(
      <div className="invalid-query-shadowbox">
        <div className="close-bttn" onClick={()=> {this.props.closePrompt()}}> X </div>
        Invalid Query <br/>
        Please try something different.
      </div>
    )
  }
}