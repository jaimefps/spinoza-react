import React from 'react'
import '../assets/invalidinput.css'

export default function InvalidInput (props) {
  if (typeof props.output === 'object' && Object.keys(props.output).length < 1 ) {
    return (
      <div className="invalid-query-shadowbox">
        <div className="close-bttn" onClick={props.closePrompt}> X </div>
        Invalid Query <br/>
        Please try something different.
      </div>
    )
  }
  return <div/>
}