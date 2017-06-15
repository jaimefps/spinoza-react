/* eslint-disable */

import Graph, { Node } from './graph.js';
import { data_etica } from './book_data';

export function createBookGraph(data) {
  var bookGraph = new Graph();
  for (let key in data) {
    bookGraph.addNode(key);
    data[key].forEach(parent_node => {
      bookGraph.addEdge(parent_node, key);
    });
  }
  return bookGraph;
}

export const book = createBookGraph(data_etica);
