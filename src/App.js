import React from 'react'; 
import greuler from 'greuler/dist/greuler.min.js';
import { book } from './graph';
import GraphViz from './greuler-obj-builder.js';
import './assets/app.css';

class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input_from: '',
      input_to: '',
      output: '',
      query_type: 'getAdjacent', 
    };

    this.getConnections = this.getConnections.bind(this);
    this.getAncestors = this.getAncestors.bind(this);
    this.getDescendants = this.getDescendants.bind(this);
    this.getParents = this.getParents.bind(this);
    this.getChildren = this.getChildren.bind(this);
    this.getAdjacent = this.getAdjacent.bind(this);

    this.handleQueryTypeSelection = this.handleQueryTypeSelection.bind(this);
    this.handleFromField = this.handleFromField.bind(this);
    this.handleToField = this.handleToField.bind(this);
    this.graph = new GraphViz()
  }

  getConnections() {
    this.setState({
      output: Object.values(book.getConnection(this.state.input_from, this.state.input_to)).sort(),
    });
  }
  getAncestors() {
    this.setState({
      output: Object.values(book.getAncestors(this.state.input_from)).sort(),
    });
  }
  getDescendants() {
    this.setState({
      output: Object.values(book.getDescendants(this.state.input_from)).sort(),
    });
  }
  getParents() {
    this.setState({
      output: Object.values(book.getParents(this.state.input_from)).sort(),
    }, () => {
      const nodes = [], links = [];
      nodes.push({ id: this.state.input_from, label: this.state.input_from, r: 25 });
      this.state.output.forEach(nodeName => {
        nodes.push({ id: nodeName, label: nodeName, r: 25 })
        links.push({ source: nodeName, target: this.state.input_from, directed: true })
      });
      this.graph.redraw(nodes, links)
    })
  }
  getChildren() {
    this.setState({
      output: Object.values(book.getChildren(this.state.input_from)).sort(),
    }, () => {
      const nodes = [], links = [];
      nodes.push({ id: this.state.input_from, label: this.state.input_from, r: 25 });
      this.state.output.forEach(nodeName => {
        nodes.push({ id: nodeName, label: nodeName, r: 25 })
        links.push({ source: this.state.input_from, target: nodeName, directed: true })
      });
      this.graph.redraw(nodes, links);
    });
  } 
  getAdjacent() {
    this.setState({
      output: book.getAdjacent(this.state.input_from),
    }, () => {
      const nodes = [], links = [];
      nodes.push({ id: this.state.input_from, label: this.state.input_from, r: 25 });
      this.state.output.children.forEach(nodeName => {
        nodes.push({ id: nodeName, label: nodeName, r: 25 })
        links.push({ source: this.state.input_from, target: nodeName, directed: true })
      });
      this.state.output.parents.forEach(nodeName => {
        nodes.push({ id: nodeName, label: nodeName, r: 25 })
        links.push({ source: nodeName, target: this.state.input_from, directed: true })
      });
      this.graph.redraw(nodes, links);
    });
  }

  handleQueryTypeSelection(e) {
    this.setState({
      query_type: e.target.name,
    });
  }
  handleFromField(e) {
    this.setState({
      input_from: e.target.value,
    });
  }
  handleToField(e) {
    this.setState({
      input_to: e.target.value,
    });
  }

  render() {
    const bounded = this;
    return (
      <div className="map-component">
      <div className="header">Spinoza Navigator</div>
      <div className="options-container">

          <div className="options">
            <a href="#target3" id="target3" className="target" name="getAdjacent" onClick={this.handleQueryTypeSelection}>getAdjacent</a>
            <a href="#target1" id="target1" className="target" name="getChildren" onClick={this.handleQueryTypeSelection}>getChildren</a>
            <a href="#target5" id="target5" className="target" name="getDescendants" onClick={this.handleQueryTypeSelection}>getDescendants</a>
            <a href="#target2" id="target2" className="target" name="getParents" onClick={this.handleQueryTypeSelection}>getParents</a>
            <a href="#target4" id="target4" className="target" name="getAncestors" onClick={this.handleQueryTypeSelection}>getAncestors</a>
            <a href="#target6" id="target6" className="target" name="getConnections" onClick={this.handleQueryTypeSelection}>getConnection</a>
          </div>
        </div>

        
        <div className="form">
          <input placeholder="from" type="text" onChange={this.handleFromField} />
          {bounded.state.query_type === 'getConnections' ? <input placeholder="to" type="text" onChange={this.handleToField} /> : null}
          <button onClick={() => {this[bounded.state.query_type]();}}>getData</button>
        </div>
        
        {this.state.output === '' ? null : <div style={{border: '1px solid black'}}>{JSON.stringify(this.state.output)}</div>}
       
        <div className="contact-links">
          <a target="_blank" href="https://www.linkedin.com/in/jaime-pericas-saez/" className="linkedin"/>
          <a target="_blank" href="https://github.com/jaimefps" className="github"/>
          <a target="_blank" href="https://www.facebook.com/jaime.f.pericas" className="facebook"/>
        </div>
        
      </div>
    );
  }
}

export default Map;