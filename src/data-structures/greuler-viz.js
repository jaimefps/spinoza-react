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

  redraw(nodes, links) {
    this.greuler.graph.removeNodesByFn(x => true)
    nodes.forEach(n => {
      this.greuler.graph.addNode(n)
    })
    links.forEach(n => {
      this.greuler.graph.addEdge(n)
    })
    this.greuler.update()
  }
}
