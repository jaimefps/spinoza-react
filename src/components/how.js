import React from 'react';
import '../assets/how.css';

export default class How extends React.Component {
  render() {
    return (
      <div className="how">

        <div className="boxy-title">how</div>
          <div className="notation-title"> SEARCH NOTATION </div>
          <div className="notation-list">
          <div className="notation">E = Ethics</div>
          <div className="notation">1 ... 5 = parts</div>
          <div className="notation">Def = Definition</div>
          <div className="notation">Ax = Axiom</div>
          <div className="notation">P = Proposition</div>
        </div>

        <div className="example-list">
          <div className="notation-title"> EXAMPLE INPUTS </div>

          <div className="example">
            <div>click: <span className="notation"> GET CHILDREN</span></div>
            <div>input: <span className="notation"> E1Def3</span></div>
          </div>

          <div className="example">
            <div>click: <span className="notation"> GET ANCESTORS </span></div>
            <div>input: <span className="notation"> E1P6</span></div>
          </div>

          <div className="note">NOTE: You can drag around the graph and help the nodes to settle.</div>
        </div>

      </div>
    )
  }
}