import React from 'react';


export default function ShadowBox (props) {
  return (
    <div className="shadow-box" style={{display: props.showIntro ? '' : 'none'}}>
      <div className="box-title-close">
        <div className="box-title-wrap">
          <div className="box-title">INFORMATION</div>
        </div>
        <div className="close-window" onClick={props.handleInfoBox}> X </div>
      </div>
      <div className="box-content">
        { props.children }
      </div>
    </div>
  )
}