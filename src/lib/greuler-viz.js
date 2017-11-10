import greuler from 'greuler/dist/greuler.min.js';

export default class GraphViz {

  constructor () {
    this.greuler = greuler({
      target: '#demo',
      height: 500,
      width: 800,
      data: {
        nodes: [],
        links: []
      }
    });
  }

  redraw(nodes, links, relation) {
    this.greuler.graph.removeNodesByFn(x => true)
    nodes.forEach(n => this.greuler.graph.addNode(n))
    links.forEach(n => this.greuler.graph.addEdge(n))
    this.greuler.update()
  }

  drawMultiDegree (data, relation) {
    const nodes = [] 
    const links = []
    for (let key in data) {
      nodes.push({ id: key, label: key, r: 15 + key.length * 2 })
      data[key].forEach(node => {
        const linkLib = {
          "connection": {source:key, target:node, directed:true},
          "descendants": {source:key, target:node, directed:true},
          "ancestors": {source:node, target:key, directed:true}
        } 
        links.push(linkLib[relation])
      })
    }
    this.redraw(nodes, links)
  }

  drawOneDegree (data, inputNode, relation) {
    const nodes = [] 
    const links = []
    nodes.push({ id: inputNode, label: inputNode, r: 15 + inputNode.length * 2 })
    data.forEach(node => {
      const linkLib = { 
        "children": {source:inputNode, target:node, directed:true },
        "parents": {source:node, target:inputNode, directed:true }
      } 
      nodes.push({ id: node, label: node, r: 15 + node.length * 2 })
      links.push(linkLib[relation])
    })
    this.redraw(nodes, links)
  }

  drawAdjacent (inputNode, data) {
    const nodes = [] 
    const links = []
    nodes.push({ id: inputNode, label: inputNode, r: 15 + inputNode.length * 2 })
    data.children.forEach(nodeName => {
      nodes.push({ id: nodeName, label: nodeName, r: 15 + nodeName.length * 2 })
      links.push({ source: inputNode, target: nodeName, directed: true })
    })
    data.parents.forEach(nodeName => {
      nodes.push({ id: nodeName, label: nodeName, r: 15 + nodeName.length * 2 })
      links.push({ source: nodeName, target: inputNode, directed: true })
    })
    this.redraw(nodes, links)
  }
}
