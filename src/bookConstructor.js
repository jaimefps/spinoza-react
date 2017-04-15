console.log('book_model.js online');

var Graph = function() {
	this.nodes = {};
};

Graph.prototype.addNode = function(node) {
	this.nodes[node] = new this.Node(node);
	return this.nodes[node]
};

Graph.prototype.Node = function(title, content) {
	this.title = title;
	this.content = content;
	this.parents = [];
	this.children = [];
};

Graph.prototype.addEdge = function(fromNode, toNode) { 
	this.nodes[fromNode.title].children.push(toNode.title);
	this.nodes[toNode.title].parents.push(fromNode.title);
};

Graph.prototype.getParents = function(title) {
	var results = [];
	this.nodes[title].parents.forEach(title => results.push(title));
	return results;
};

Graph.prototype.getChildren = function (title) {
	var results = [];
	this.nodes[title].children.forEach(title => results.push(title));
	return results;
};

Graph.prototype.getAdjacent = function(title) {
	var results = [];
	results.push(this.getChildren(title));
	results.push(this.getParents(title));
	return results;
};

// =====> not implemented <=====
Graph.prototype.getConnection = function(from, to) {
	var results = [];
		// 1 look for all descendants of 'from' & ancestors of 'to'
		// 2 return common elements between them.
		// 3 would this generate all paths between the two?
	return results;
};

Graph.prototype.getAncestors = function(title) {
  var results = [];
	return results;
};

Graph.prototype.getDescendants = function(from, to) {
	var results = [];
	return results;
};

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~>> the Ethics:
var book = new Graph();

// Ethica P.1 Axioms
var E1Ax1 = book.addNode('E1Ax1', 'some content');
var E1Ax2 = book.addNode('E1Ax2', 'some content');
var E1Ax3 = book.addNode('E1Ax3', 'some content');
var E1Ax4 = book.addNode('E1Ax4', 'some content');
var E1Ax5 = book.addNode('E1Ax5', 'some content');
var E1Ax6 = book.addNode('E1Ax6', 'some content');
var E1Ax7 = book.addNode('E1Ax7', 'some content');

// Ethica P.1 Definitions
var E1Def1 = book.addNode('E1Def1', 'some content');
var E1Def2 = book.addNode('E1Def2', 'some content');
var E1Def3 = book.addNode('E1Def3', 'some content');
var E1Def4 = book.addNode('E1Def4', 'some content');
var E1Def5 = book.addNode('E1Def5', 'some content');
var E1Def6 = book.addNode('E1Def6', 'some content');
var E1Def7 = book.addNode('E1Def7', 'some content');
var E1Def8 = book.addNode('E1Def8', 'some content');

// Ethica P.1 Propositions 1-10 
var E1P1 = book.addNode('E1P1', 'some content');
book.addEdge(E1Def3, E1P1);
book.addEdge(E1Def5, E1P1);

var E1P2 = book.addNode('E1P2', 'some content');
book.addEdge(E1Def3, E1P2);

var E1P3 = book.addNode('E1P3', 'some content');
book.addEdge(E1Ax4, E1P3);
book.addEdge(E1Ax5, E1P3);

var E1P4 = book.addNode('E1P4', 'some content');
book.addEdge(E1Ax4, E1P4);
book.addEdge(E1Ax5, E1P4);

var E1P5 = book.addNode('E1P5', 'some content');
book.addEdge(E1P1, E1P5);
book.addEdge(E1P4, E1P5);
book.addEdge(E1Def3, E1P5);
book.addEdge(E1Def6, E1P5);

var E1P6 = book.addNode('E1P6', 'some content');
book.addEdge(E1P5, E1P6);
book.addEdge(E1P2, E1P6);
book.addEdge(E1P3, E1P6);

var E1P7 = book.addNode('E1P7', 'some content');
book.addEdge(E1P6, E1P7);
book.addEdge(E1Def1, E1P7);

var E1P8 = book.addNode('E1P8', 'some content');
book.addEdge(E1P5, E1P8);
book.addEdge(E1P7, E1P8);
book.addEdge(E1Def2, E1P8);

var E1P9 = book.addNode('E1P9', 'some content');
book.addEdge(E1Def4, E1P9);

var E1P10 = book.addNode('E1P10', 'some content');
book.addEdge(E1Def4, E1P10);
book.addEdge(E1Def3, E1P10);



