/* eslint-disable */
import Graph, { Node } from './graph.js'

export const book = new Graph();

// reference to sources outside the Ethics itself
const PrinciplesOfCartecianPhilosophy = book.addNode('PCP 19')

// part 1
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

const E1P14Cor2 = book.addNode('E1P14Cor2');
book.addEdge(E1Ax1, E1P14Cor2);

const E1P15 = book.addNode('E1P15');
book.addEdge(E1P14,E1P15);
book.addEdge(E1Def3,E1P15);
book.addEdge(E1Def5,E1P15);
book.addEdge(E1Ax1,E1P15);

const E1P15Sch1 = book.addNode('E1P15Sch1');
book.addEdge(E1P6Cor1, E1P15Sch1);
book.addEdge(E1P8Sch2, E1P15Sch1);
book.addEdge(E1P14, E1P15Sch1);
book.addEdge(E1P12, E1P15Sch1);
book.addEdge(E1P13Cor1, E1P15Sch1);

const E1P16 = book.addNode('E1P16');
book.addEdge(E1Def6, E1P16);

const E1P16Cor1 = book.addNode('E1P16Cor1');

const E1P16Cor2 = book.addNode('E1P16Cor2');

const E1P16Cor3 = book.addNode('E1P16Cor3');

const E1P17 = book.addNode('E1P17');
book.addEdge(E1P16, E1P17);
book.addEdge(E1P15, E1P17);

const E1P17Cor1 = book.addNode('E1P17Cor1');

const E1P17Cor2 = book.addNode('E1P17Cor2');
book.addEdge(E1P11, E1P17Cor2);
book.addEdge(E1P14Cor1, E1P17Cor2);
book.addEdge(E1P16, E1P17Cor2);
book.addEdge(E1Def7, E1P17Cor2);

const E1P17Sch1 = book.addNode('E1P17Sch1');
book.addEdge(E1P16, E1P17Sch1);
book.addEdge(E1P16Cor1, E1P17Sch1);

const E1P18 = book.addNode('E1P18');
book.addEdge(E1P15, E1P18);
book.addEdge(E1P16Cor1, E1P18);
book.addEdge(E1P14, E1P18);
book.addEdge(E1Def3, E1P18);

const E1P19 = book.addNode('E1P19');
book.addEdge(E1Def6, E1P19);
book.addEdge(E1P7, E1P19);
book.addEdge(E1P11, E1P19);
book.addEdge(E1Def4 ,E1P19);
book.addEdge(E1Def8 ,E1P19);

const E1P19Sch1 = book.addNode('E1P19Sch1');
book.addEdge(E1P11, E1P19Sch1);
book.addEdge(PrinciplesOfCartecianPhilosophy, E1P19Sch1);

const E1P20 = book.addNode('E1P20');
book.addEdge(E1P19, E1P20);
book.addEdge(E1Def8, E1P20);
book.addEdge(E1Def4, E1P20);

const E1P20Cor1 = book.addNode('E1P20Cor1');

const E1P20Cor2 = book.addNode('E1P20Cor2');
book.addEdge(E1P20, E1P20Cor2);

const E1P21 = book.addNode('E1P21');
book.addEdge(E1P11, E1P21);
book.addEdge(E1Def2, E1P21);
book.addEdge(E1P20Cor2,E1P21);

const E1P22 = book.addNode('E1P22');
book.addEdge(E1P11, E1P22);
book.addEdge(E1Def2, E1P22);
book.addEdge(E1P20Cor2,E1P22);

const E1P23 = book.addNode('E1P23');
book.addEdge(E1Def5, E1P23);
book.addEdge(E1P15, E1P23);
book.addEdge(E1Def8, E1P23);
book.addEdge(E1Def6, E1P23);
book.addEdge(E1P19, E1P23);
book.addEdge(E1P21, E1P23);
book.addEdge(E1P22, E1P23);

const E1P24 = book.addNode('E1P24');
book.addEdge(E1Def1, E1P24);

const E1P24Cor1 = book.addNode('E1P24Cor1');
book.addEdge(E1P14Cor1, E1P24Cor1);

const E1P25 = book.addNode('E1P25');
book.addEdge(E1Ax4, E1P25);
book.addEdge(E1P15, E1P25);

const E1P25Sch1 = book.addNode('E1P25Sch1');
book.addEdge(E1P16, E1P25Sch1);

const E1P25Cor1 = book.addNode('E1P25Cor1');
book.addEdge(E1P15, E1P25Cor1);
book.addEdge(E1Def5, E1P25Cor1);

const E1P26 = book.addNode('E1P26');
book.addEdge(E1P25, E1P26);
book.addEdge(E1P16, E1P26);

const E1P27 = book.addNode('E1P27');
book.addEdge(E1Ax3, E1P27);

const E1P28 = book.addNode('E1P28');
book.addEdge(E1P26, E1P28);
book.addEdge(E1P24Cor1, E1P28);
book.addEdge(E1P21, E1P28);
book.addEdge(E1Ax1, E1P28);
book.addEdge(E1Def3,E1P28);
book.addEdge(E1Def5, E1P28);
book.addEdge(E1P25Cor1, E1P28);
book.addEdge(E1P22, E1P28);

const E1P28Sch1 = book.addNode('E1P28Sch1');

const E1P29 = book.addNode('E1P29');
book.addEdge(E1P15, E1P29);
book.addEdge(E1P11, E1P29);
book.addEdge(E1P16, E1P29);
book.addEdge(E1P21, E1P29);
book.addEdge(E1P24, E1P29);
book.addEdge(E1P27, E1P29);
book.addEdge(E1P26, E1P29);

const E1P29Sch1 = book.addNode('E1P29Sch1');
book.addEdge(E1P14Cor1, E1P29Sch1);
book.addEdge(E1P17Cor2, E1P29Sch1);

const E1P30 = book.addNode('E1P30');
book.addEdge(E1Ax6, E1P30);
book.addEdge(E1P14Cor1, E1P30);
book.addEdge(E1P15, E1P30);

const E1P31 = book.addNode('E1P31');
book.addEdge(E1P15, E1P31);
book.addEdge(E1Def6, E1P31);
book.addEdge(E1P29Sch1, E1P31);

const E1P31Sch1 = book.addNode('E1P31Sch1');

const E1P32 = book.addNode('E1P32');
book.addEdge(E1P28, E1P32);
book.addEdge(E1P23, E1P32);
book.addEdge(E1Def7, E1P32);

const E1P32Cor1 = book.addNode('E1P32Cor1');

const E1P32Cor2 = book.addNode('E1P32Cor2');
book.addEdge(E1P29, E1P32Cor2);

const E1P33 = book.addNode('E1P33');
book.addEdge(E1P16, E1P33);
book.addEdge(E1P29, E1P33);
book.addEdge(E1P11, E1P33);
book.addEdge(E1P14Cor1, E1P33);

const E1P33Sch1 = book.addNode('E1P33Sch1');

const E1P33Sch2 = book.addNode('E1P33Sch2');
book.addEdge(E1Def7, E1P33Sch2);
book.addEdge(E1P17Sch1,E1P33Sch2);

const E1P34 = book.addNode('E1P34');
book.addEdge(E1P11, E1P34);
book.addEdge(E1P16, E1P34);
book.addEdge(E1P16Cor1, E1P34);

const E1P35 = book.addNode('E1P35');
book.addEdge(E1P34, E1P35);

const E1P36 = book.addNode('E1P36');
book.addEdge(E1P25Cor1, E1P36);
book.addEdge(E1P34, E1P36);
book.addEdge(E1P16, E1P36);

// part 2
const E2Def1 = book.addNode('E2Def1');
const E2Def2 = book.addNode('E2Def2');
const E2Def3 = book.addNode('E2Def3');
const E2Def4 = book.addNode('E2Def4');
const E2Def5 = book.addNode('E2Def5');
const E2Def6 = book.addNode('E2Def6');
const E2Def7 = book.addNode('E2Def7');

const E2Ax1 = book.addNode('E2Ax1');
const E2Ax2 = book.addNode('E2Ax2');
const E2Ax3 = book.addNode('E2Ax3');
const E2Ax4 = book.addNode('E2Ax4');
const E2Ax5 = book.addNode('E2Ax5');

const E2P1 = book.addNode('E2P1');
book.addEdge(E1P25Cor1, E2P1);
book.addEdge(E1Def5, E2P1);
book.addEdge(E1Def6, E2P1);

const E2P1Sch1 = book.addNode('E2P1Sch1');

const E2P2 = book.addNode('E2P2');
book.addEdge(E1P25Cor1, E2P2);
book.addEdge(E1Def5, E2P2);
book.addEdge(E1Def6, E2P2);

const E2P3 = book.addNode('E2P3');
book.addEdge(E2P1, E2P3);
book.addEdge(E1P16, E2P3);
book.addEdge(E1P35, E2P3);
book.addEdge(E1P15, E2P3);

const E2P3Sch1 = book.addNode('E2P3Sch1');
book.addEdge(E1P32Cor1, E2P3Sch1);
book.addEdge(E1P32Cor2, E2P3Sch1);
book.addEdge(E1P16, E2P3Sch1);
book.addEdge(E1P34, E2P3Sch1);

const E2P4 = book.addNode('E2P4');
book.addNode(E1P30, E2P4);
book.addNode(E1P14Cor1, E2P4);

const E2P5 = book.addNode('E2P5');
book.addEdge(E2P3, E2P5);
book.addEdge(E1P25Cor1, E2P5);
book.addEdge(E1P10, E2P5);
book.addEdge(E1Ax4, E2P5);

const E2P6 = book.addNode('E2P6');
book.addEdge(E1P10, E2P6);
book.addEdge(E1Ax4, E2P6);

const E2P6Cor1 = book.addNode('E2P6Cor1');

const E2P7 = book.addNode('E2P7');
book.addEdge(E1Ax4, E2P7);

const E2P7Cor1 = book.addNode('E2P7Cor1');
