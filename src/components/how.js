import React from 'react';
import '../assets/how.css';

export default function How (props) {
  const notations = [
    {string: 'E = Ethics'},
    {string: '1 ... 5 = parts'},
    {string: 'Def(#) = Definition(#)'},
    {string: 'Ax(#) = Axiom(#)'},
    {string: 'P(#) = Proposition(#)'},
    {string: 'Cor(#) = Corollary(#)'},
    {string: 'Sch(#) = Schollium(#)'},
  ]
  const examples = [
    {text: 'GET CONNECTION', from:'E1Def1', to:'E1P36'},
    {text: 'GET ADJACENT', from:'E1P6', to:''},
    {text: 'GET CHILDREN', from:'E1Def3', to:''},
  ]
  return (
    <div className="how">

      <div className="boxy-title">how</div>
      <div className="notation-title"> SEARCH NOTATION </div>
      <div className="notation-list">
        { notations.map((x, index) => <div key={index} className='notation'>{x.string}</div>) }
      </div>

      <div className="example-list">
        <div className="notation-title"> EXAMPLE INPUTS </div>
        { 
          examples.map((x, index) => {
            return (
              <div className="example">
                <div>click: <span className="dummy-bttn"> {x.text}</span></div>
                <div>input: from<span className="dummy-input">E1Def1</span>
                  { x.to.length < 1 && <div>input: <span className="dummy-input">{x.from}</span></div> }
                  { x.to.length > 0 && <div>input: from<span className="dummy-input">{x.from}</span> to<span className="dummy-input">{x.to}</span></div> }
                </div>
              </div>
            )
          })
        }
        <div className="note">NOTE: You can drag around the graph and help the nodes to settle.</div>
      </div>
    </div>
  )
}