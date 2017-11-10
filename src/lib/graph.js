export class Node {
  constructor(title, content) {
    this.title = title;
    this.content = content;
    this.parents = [];
    this.children = [];
  }
}
export default class Graph {
  constructor() {
    this.nodes = {};
  }
  addNode(node, content) {
    this.nodes[node] = new Node(node, content);
    return this.nodes[node];
  }
  addEdge(fromNode, toNode) {
    this.nodes[fromNode].children.push(toNode);
    this.nodes[toNode].parents.push(fromNode);
  }
  parents(name) {
    const results = [];
    this.nodes[name].parents.forEach(name => results.push(name));
    return results;
  }
  children(name) {
    const results = [];
    this.nodes[name].children.forEach(name => results.push(name));
    return results;
  }
  getAdjacent(name) {
    const result = {
      children: this.children(name),
      parents: this.parents(name),
    }
    return result;
  }
  connection(from, to) {
    const connectors = {};
    const descendantsEtAl = this.getDescendantsGreuler(from);
    const ancestorsEtAl = this.getAncestorsGreuler(to);
    for (let key in descendantsEtAl) {
      if (ancestorsEtAl[key]) connectors[key] = descendantsEtAl[key];
    }
    for (let key in connectors) {
      connectors[key] = connectors[key].filter(el => connectors[el]);
    }
    return connectors;
  }
  getAncestorsGreuler(title) {
    const propsWithParents = {};
    const graph = this;
    (function getParents(nodeName) {
      propsWithParents[nodeName] = graph.nodes[nodeName].parents;
      if (graph.nodes[nodeName].parents.length < 1) return;
      graph.nodes[nodeName].parents.forEach((parent) => {
        getParents(parent);
      }) 
    }(title))
    return propsWithParents;
  }
  getDescendantsGreuler(title) {
    const propsWithChildren = {}
    const graph = this;
    (function getChildren(nodeName) {
      propsWithChildren[nodeName] = graph.nodes[nodeName].children;
      if (graph.nodes[nodeName].children.length < 1) return;
      graph.nodes[nodeName].children.forEach((child) => {
        getChildren(child);
      })
    }(title))
    return propsWithChildren;
  }
}

