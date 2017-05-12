import React from 'react'; 
import greuler from 'greuler/dist/greuler.min.js';

import { book } from '../data-structures/book.js';
import GraphViz from '../data-structures/greuler-viz.js';

import What from './what.js';
import How from './how.js';
import Who from './who.js';
import InvalidInput from './invalidinput'
import '../assets/App.css';

class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input_from: '',
      input_to: '',
      output: '',
      query_type: '',
      showIntro: false,
      whatIntro: '',
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
      output: book.getConnection(this.state.input_from, this.state.input_to),
    }, () => {
      const nodes = [], links = [];
      for (let key in this.state.output) {
        nodes.push({ id: key, label: key, r: 30 });
        this.state.output[key].forEach(child => {
          links.push({ source: key, target: child, directed: true });
        });
      }
      this.graph.redraw(nodes, links);
    });
  }
  getAncestors() {
    this.setState({
      output: book.getAncestorsGreuler(this.state.input_from),
    }, () => {
      const nodes = [], links = [];
      for (let key in this.state.output) {
        nodes.push({ id: key, label: key, r: 30 });
        this.state.output[key].forEach(parent => {
          links.push({ source: parent, target: key, directed: true });
        });
      }
      this.graph.redraw(nodes, links);
    });
  }
  getDescendants() {
    this.setState({
      output: book.getDescendantsGreuler(this.state.input_from),
    }, () => {
      const nodes = [], links = [];
      for (let key in this.state.output) {
        nodes.push({ id: key, label: key, r: 30 });
        this.state.output[key].forEach(child => {
          links.push({ source: key, target: child, directed: true });
        });
      }
      this.graph.redraw(nodes, links);
    });
  }
  getChildren(e) {  
    this.setState({
      output: Object.values(book.getChildren(this.state.input_from)),
    }, () => {
      const nodes = [], links = [];
      nodes.push({ id: this.state.input_from, label: this.state.input_from, r: 30 });
      this.state.output.forEach(nodeName => {
        nodes.push({ id: nodeName, label: nodeName, r: 30 })
        links.push({ source: this.state.input_from, target: nodeName, directed: true })
      });
      this.graph.redraw(nodes, links);
    });
  } 
  getParents() {
    this.setState({
      output: Object.values(book.getParents(this.state.input_from)),
    }, () => {
      const nodes = [], links = [];
      nodes.push({ id: this.state.input_from, label: this.state.input_from, r: 30 });
      this.state.output.forEach(nodeName => {
        nodes.push({ id: nodeName, label: nodeName, r: 30 })
        links.push({ source: nodeName, target: this.state.input_from, directed: true })
      });
      this.graph.redraw(nodes, links)
    })
  }
  getAdjacent() {
    this.setState({
      output: book.getAdjacent(this.state.input_from),
    }, () => {
      const nodes = [], links = [];
      nodes.push({ id: this.state.input_from, label: this.state.input_from, r: 30 });
      this.state.output.children.forEach(nodeName => {
        nodes.push({ id: nodeName, label: nodeName, r: 30 })
        links.push({ source: this.state.input_from, target: nodeName, directed: true })
      });
      this.state.output.parents.forEach(nodeName => {
        nodes.push({ id: nodeName, label: nodeName, r: 30 })
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

  handleInfoBox() {
    this.setState({
      showIntro: !this.state.showIntro,
    })
  }
  handleInvalidInputBox() {
    this.setState({
      output: '',
    });
  }

  render() {
    const bounded = this;
    console.log(this.state.output)
    return (
      <div className="map-component">
        
        <div className="header">
          <div className="title">SPINOZA NAVIGATOR</div>
        </div>

        <div className="options-container">
          <div className="options">
            <a href="#adjacent" id="adjacent" className="target" name="getAdjacent" onClick={this.handleQueryTypeSelection}>Get Adjacent</a>
            <a href="#children" id="children" className="target" name="getChildren" onClick={this.handleQueryTypeSelection}>Get Children</a>
            {/*<a href="#descendants" id="descendants" className="target" name="getDescendants" onClick={this.handleQueryTypeSelection}>Get Descendants</a>*/}
            <a href="#parents" id="parents" className="target" name="getParents" onClick={this.handleQueryTypeSelection}>Get Parents</a>
            {/*<a href="#ancestors" id="ancestors" className="target" name="getAncestors" onClick={this.handleQueryTypeSelection}>Get Ancestors</a>*/}
            <a href="#connections" id="connections" className="target" name="getConnections" onClick={this.handleQueryTypeSelection}>Get Connection</a>
          </div>
        </div>

        <div className="form">
          <input placeholder="from" type="text" onChange={this.handleFromField} />
          {bounded.state.query_type === 'getConnections' ? <input placeholder="to" type="text" onChange={this.handleToField} /> : null}
          <button onClick={() => {this[bounded.state.query_type]()}}>GET DATA</button>
          <div className="instructions-bttn" onClick={() => {this.handleInfoBox()}}>instructions / credits</div>
        </div>

        {/*{this.state.output === '' ? null : <div style={{border: '3px solid black'}}><pre style={{fontWeight: 'bold'}}>{JSON.stringify(this.state.output)}</pre></div>}*/}
        
        <div className="shadow-box" style={{display: this.state.showIntro ? '' : 'none'}}> 
          <div className="box-title-close">
            <div className="box-title">INFORMATION</div>
            <div className="close-window" onClick={() => { this.handleInfoBox()}}> X </div>
          </div>
          <div className="box-content">
            <What />
            <How />
            <Who />
          </div>
        </div>

        {
          typeof this.state.output === 'object' && 
          Object.keys(this.state.output).length < 1 ?
          <InvalidInput closePrompt={this.handleInvalidInputBox.bind(this)}/> :
          null
        }

      </div>
    );
  }
}

export default Map;
