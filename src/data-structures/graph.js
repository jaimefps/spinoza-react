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
    this.nodes[fromNode.title].children.push(toNode.title);
    this.nodes[toNode.title].parents.push(fromNode.title);
  }
  
  getAdjacent(title) {
    const result = {
      children: this.getChildren(title),
      parents: this.getParents(title),
    };
    return result;
  }

  getParents(title) {
    const results = [];
    this.nodes[title].parents.forEach(nodeName => results.push(nodeName));
    return results;
  }

  getChildren(title) {
    const results = [];
    this.nodes[title].children.forEach(nodeName => results.push(nodeName));
    return results;
  }

// original ancestors function
  getAncestors(title) {
    const allParents = {};
    const graph = this;
    (function getParents(nodeName) {
      if (graph.nodes[nodeName].parents.length < 1) return;
      graph.nodes[nodeName].parents.forEach((parent) => {
        allParents[parent] = parent;
        getParents(parent);
      });
    }(title));
    return allParents;
  }
// new ancestors function 
  getAncestorsGreuler(title) {
    const propsWithParents = {};
    const graph = this;
    (function getParents(nodeName) {
      propsWithParents[nodeName] = graph.nodes[nodeName].parents;
      if (graph.nodes[nodeName].parents.length < 1) return;
      graph.nodes[nodeName].parents.forEach((parent) => {
        getParents(parent);
      });
    }(title));
    return propsWithParents;
  }

// original descendants function
  getDescendants(title) {
    const allChildren = {};
    const graph = this;
    (function getChildren(nodeName) {
      if (graph.nodes[nodeName].children.length < 1) return;
      graph.nodes[nodeName].children.forEach((child) => {
        allChildren[child] = child;
        getChildren(child);
      });
    }(title));
    return allChildren;
  }
// new descendants function
  getDescendantsGreuler(title) {
    const propsWithChildren = {};
    const graph = this;
    (function getChildren(nodeName) {
      propsWithChildren[nodeName] = graph.nodes[nodeName].children;
      if (graph.nodes[nodeName].children.length < 1) return;
      graph.nodes[nodeName].children.forEach((child) => {
        getChildren(child);
      });
    }(title));
    return propsWithChildren;
  }

  getConnection(from, to) {
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
}

