/* eslint-disable */

import Graph, { Node } from './graph.js';
import { data_etica } from './book_data';

export function createBookGraph(data) {
  const graph = new Graph();
  for (let node in data) {
    graph.addNode(node)
    data[node].forEach(parent => graph.addEdge(parent, node))
  }
  return graph;
}

export const book = createBookGraph(data_etica);
