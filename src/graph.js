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
    const childrenOfFrom = this.getDescendants(from);
    const parentsOfTo = this.getAncestors(to);
    Object.values(childrenOfFrom).forEach((child) => {
      if (parentsOfTo[child]) connectors[child] = child;
    });
    return connectors;
  }
}

export const book = new Graph();

// Ethica P.1 Axioms
const E1Ax1 = book.addNode('E1Ax1', 'some content');
const E1Ax2 = book.addNode('E1Ax2', 'some content');
const E1Ax3 = book.addNode('E1Ax3', 'some content');
const E1Ax4 = book.addNode('E1Ax4', 'some content');
const E1Ax5 = book.addNode('E1Ax5', 'some content');
const E1Ax6 = book.addNode('E1Ax6', 'some content');
const E1Ax7 = book.addNode('E1Ax7', 'some content');

// Ethica P.1 Definitions
const E1Def1 = book.addNode('E1Def1', 'some content');
const E1Def2 = book.addNode('E1Def2', 'some content');
const E1Def3 = book.addNode('E1Def3', 'some content');
const E1Def4 = book.addNode('E1Def4', 'some content');
const E1Def5 = book.addNode('E1Def5', 'some content');
const E1Def6 = book.addNode('E1Def6', 'some content');
const E1Def7 = book.addNode('E1Def7', 'some content');
const E1Def8 = book.addNode('E1Def8', 'some content');

// Ethica P.1 Propositions 1-10
const E1P1 = book.addNode('E1P1', 'some content');
book.addEdge(E1Def3, E1P1);
book.addEdge(E1Def5, E1P1);

const E1P2 = book.addNode('E1P2', 'some content');
book.addEdge(E1Def3, E1P2);

const E1P3 = book.addNode('E1P3', 'some content');
book.addEdge(E1Ax4, E1P3);
book.addEdge(E1Ax5, E1P3);

const E1P4 = book.addNode('E1P4', 'some content');
book.addEdge(E1Ax1, E1P4);
book.addEdge(E1Def3, E1P4);
book.addEdge(E1Def4, E1P4);
book.addEdge(E1Def5, E1P4);

const E1P5 = book.addNode('E1P5', 'some content');
book.addEdge(E1P1, E1P5);
book.addEdge(E1P4, E1P5);
book.addEdge(E1Ax6, E1P5);
book.addEdge(E1Def3, E1P5);

const E1P6 = book.addNode('E1P6', 'some content');
book.addEdge(E1P2, E1P6);
book.addEdge(E1P3, E1P6);
book.addEdge(E1P5, E1P6);