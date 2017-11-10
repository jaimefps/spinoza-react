/* eslint-disable */
import React from 'react'

import { book } from '../lib/book_graph'
import GraphViz from '../lib/greuler-viz'

import Header from './header'
import QueryButtons from './queryButtons'
import Form from './form'
import ShadowBox from './shadowbox'
import What from './what'
import How from './how'
import Who from './who'
import InvalidInput from './invalidinput'

import '../assets/App.css'

export default class Map extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input_from: 'E1Def1',
      input_to: 'E2P3',
      output: '',
      query_type: 'connection',
      showIntro: false,
    }
    this.getAdjacent = this.getAdjacent.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.handleInfoBox = this.handleInfoBox.bind(this)
    this.selectQueryType = this.selectQueryType.bind(this)
    this.draw = this.draw.bind(this)
    this.graph = new GraphViz()
  }
  componentDidMount() {
    window.location = "#connection"
    this.drawComplex('connection')
  }
  handleInput (e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleInfoBox() {
    this.setState({ showIntro: !this.state.showIntro })
  }
  handleInvalidInputBox() {
    this.setState({ output: '' })
  }
  selectQueryType(e) {
    this.setState({ query_type: e.target.value })
  }
  draw() {
    const config = {
      connection: ['drawComplex', 'connection'],
      parents: ['drawSimple', 'parents'],
      children: ['drawSimple', 'children'],
      getAdjacent: ['getAdjacent'],
      // getAncestorsGreuler: ['drawComplex', 'ancestors'],
      // getDescendantsGreuler: ['drawComplex', 'descendants'],

    }
    const query = this.state.query_type
    const drawType = config[query][0]
    this[drawType](query)
  }
  drawComplex(query) {
    this.setState({output: book[query](this.state.input_from, this.state.input_to)},
    () => this.graph.drawMultiDegree(this.state.output, query))
  }
  drawSimple(query) {
    this.setState({output: Object.values(book[query](this.state.input_from))},
    () => this.graph.drawOneDegree(this.state.output, this.state.input_from, query))
  }
  getAdjacent() {
    this.setState({output: book.getAdjacent(this.state.input_from)}, 
    () => this.graph.drawAdjacent(this.state.input_from, this.state.output))
  }

  render() {
    return (
      <div className="map-component">

        <Header text={'spinoza navigator'} />

        <Form handleInfoBox={this.handleInfoBox}
              queryType={this.state.query_type}
              onClick={this.draw}
              handleInput={this.handleInput}
              from={this.state.input_from}
              to={this.state.input_to}>

          <QueryButtons selectQueryType={this.selectQueryType} query_type={this.state.query_type}/>
        </Form>

        <ShadowBox showIntro={this.state.showIntro} handleInfoBox={this.handleInfoBox}>
          <What />
          <How />
          <Who />
        </ShadowBox>

        <InvalidInput output={this.state.output} closePrompt={this.handleInvalidInputBox.bind(this)}/>
        
      </div>
    )
  }
}
