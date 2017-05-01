import React from 'react';
import { Node, Graph, book } from '../graph';
import '../assets/map.css';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      output: '',
    };
    this.handleField = this.handleField.bind(this);
    this.getConnection = this.getConnection.bind(this);
  }

  getConnection(from, to) {
    this.setState({
      output: book.getConnection('E1Def3', 'E1P6'),
    });
  }

  handleField(e) {
    this.setState({
      input: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <h2>Map</h2>
        <div className="form">
          <input placeholder="" type="text" onChange={this.handleField} />
          <button onClick={() => { this.getConnection(); }}>Get Results</button>
        </div>
        <div>{JSON.stringify(this.state.output)}</div>
        <a href="#target1" id="target1" className="target">Target 1</a>
        <a href="#target2" id="target2" className="target">Target 2</a>
        <a href="#target3" id="target3" className="target">Target 3</a>
      </div>
    );
  }
}


export default Map;
