import Graph, { Node } from './graph.js'

export const book = new Graph();

const E1Ax1 = book.addNode('E1Ax1');
const E1Ax2 = book.addNode('E1Ax2');
const E1Ax3 = book.addNode('E1Ax3');
const E1Ax4 = book.addNode('E1Ax4');
const E1Ax5 = book.addNode('E1Ax5');
const E1Ax6 = book.addNode('E1Ax6');
const E1Ax7 = book.addNode('E1Ax7');

const E1Def1 = book.addNode('E1Def1');
const E1Def2 = book.addNode('E1Def2');
const E1Def3 = book.addNode('E1Def3');
const E1Def4 = book.addNode('E1Def4');
const E1Def5 = book.addNode('E1Def5');
const E1Def6 = book.addNode('E1Def6');
const E1Def7 = book.addNode('E1Def7');
const E1Def8 = book.addNode('E1Def8');

const E1P1 = book.addNode('E1P1');
book.addEdge(E1Def3, E1P1);
book.addEdge(E1Def5, E1P1);

const E1P2 = book.addNode('E1P2');
book.addEdge(E1Def3, E1P2);

const E1P3 = book.addNode('E1P3');
book.addEdge(E1Ax4, E1P3);
book.addEdge(E1Ax5, E1P3);

const E1P4 = book.addNode('E1P4');
book.addEdge(E1Ax1, E1P4);
book.addEdge(E1Def3, E1P4);
book.addEdge(E1Def4, E1P4);
book.addEdge(E1Def5, E1P4);

const E1P5 = book.addNode('E1P5');
book.addEdge(E1P4, E1P5);
book.addEdge(E1P1, E1P5);
book.addEdge(E1Def3, E1P5);
book.addEdge(E1Ax6, E1P5);

const E1P6 = book.addNode('E1P6');
book.addEdge(E1P2, E1P6);
book.addEdge(E1P3, E1P6);
book.addEdge(E1P5, E1P6);

const E1P6Cor1 = book.addNode('E1P6Cor1');
book.addEdge(E1Ax1, E1P6Cor1);
book.addEdge(E1Def3, E1P6Cor1);
book.addEdge(E1Def5, E1P6Cor1);
book.addEdge(E1P6, E1P6Cor1);
book.addEdge(E1Ax4, E1P6Cor1);

const E1P7 = book.addNode('E1P7');
book.addEdge(E1P6Cor1, E1P7);
book.addEdge(E1Def1, E1P7);

const E1P8 = book.addNode('E1P8');
book.addEdge(E1P5, E1P8);
book.addEdge(E1P7, E1P8);
book.addEdge(E1Def2, E1P8);

const E1P8Sch1 = book.addNode('E1P8Sch1');
book.addEdge(E1P7, E1P8Sch1);

const E1P8Sch2 = book.addNode('E1P8Sch2');
book.addEdge(E1P7, E1P8Sch2);

const E1P9 = book.addNode('E1P9');
book.addEdge(E1Def4, E1P9);

const E1P10 = book.addNode('E1P10');
book.addEdge(E1Def4, E1P10);
book.addEdge(E1Def3, E1P10);

const E1P10Sch1 = book.addNode('E1P10Sch1');
book.addEdge(E1Def6, E1P10Sch1);

const E1P11 = book.addNode('E1P11');
book.addEdge(E1Ax7, E1P11);
book.addEdge(E1P7, E1P11);
book.addEdge(E1P2, E1P11);
book.addEdge(E1Ax1, E1P11);
book.addEdge(E1Def6, E1P11);

const E1P11Sch1 = book.addNode('E1P11Sch1');
book.addEdge(E1P6, E1P11Sch1);

const E1P12 = book.addNode('E1P12');
book.addEdge(E1P8, E1P12);
book.addEdge(E1P6, E1P12);
book.addEdge(E1P5, E1P12);
book.addEdge(E1P2, E1P12);
book.addEdge(E1Def4, E1P12);
book.addEdge(E1P10, E1P12);
book.addEdge(E1P7, E1P12);

const E1P13 = book.addNode('E1P13');
book.addEdge(E1P5, E1P13);
book.addEdge(E1P12, E1P13);
book.addEdge(E1P11, E1P13);

const E1P13Cor1 = book.addNode('E1P13Cor1');
book.addEdge(E1P13, E1P13Cor1);

const E1P13Sch1 = book.addNode('E1P13Sch1');
book.addEdge(E1P8, E1P13Sch1);

const E1P14 = book.addNode('E1P14');
book.addEdge(E1P11, E1P14);
book.addEdge(E1P5, E1P14);

const E1P14Cor1 = book.addNode('E1P14Cor1');
book.addEdge(E1P10Sch1, E1P14Cor1);
book.addEdge(E1Def6, E1P14Cor1);

