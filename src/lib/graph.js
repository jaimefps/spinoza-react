export class Node {
  constructor(title) {
    this.title = title;
    this.parents = [];
    this.children = [];
  }
}

export default class Graph {
  constructor() {
    this.nodes = {};
  }
  addNode(node) {
    this.nodes[node] = new Node(node);
  }
  addEdge(fromNode, toNode) {
    this.nodes[fromNode].children.push(toNode);
    this.nodes[toNode].parents.push(fromNode);
  }
  parents (node) {
    return this.getParents(node);
  }
  getParents(node) {
    return this.nodes[node].parents;
  }
  children(node) {
    return this.getChildren(node);
  }
  getChildren(node) {
    return this.nodes[node].children;
  }
  getAdjacent(node) {
    return {
      children: this.getChildren(node),
      parents: this.getParents(node),
    };
  }
  getAncestors(node) {
    const graph = this;
    const ancestors = {};
    function subroutine (node) {
      ancestors[node] = graph.getParents(node);
      if (graph.getParents(node).length < 1) {
        return;
      }
      graph.getParents(node).forEach((parent) => {
        subroutine(parent);
      });
    }
    subroutine(node);
    return ancestors;
  }
  getDescendants(node) {
    const graph = this;
    const descendants = {};
    function subroutine (node) {
      descendants[node] = graph.getChildren(node);
      if (graph.getChildren(node).length < 1) {
        return;
      }
      graph.getChildren(node).forEach((child) => {
        subroutine(child);
      });
    }
    subroutine(node);
    return descendants;
  }
  connection (from, to) {
    return this.getConnection(from, to);
  }
  getConnection(from, to) {
    const connectors = {};
    const descendants = this.getDescendants(from);
    const ancestors = this.getAncestors(to);
    for (let key in descendants) {
      if (ancestors[key]) {
        connectors[key] = descendants[key];
      }
    }
    for (let key in connectors) {
      connectors[key] = connectors[key].filter((el) => connectors[el]);
    }
    return connectors;
  }
}

