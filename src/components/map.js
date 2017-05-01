import React from 'react';
import { Node, Graph, book } from '../graph';

const Map = () => (
  <div>
    <h2>Map</h2>
    {JSON.stringify(book)}
  </div>
);

export default Map;
