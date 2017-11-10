import React from 'react'
import { data_etica } from '../lib/book_data'

export default function Form (props) {
  return (
    <div className="form">  

      {/* query type selector */}
      <div className="select-node">
        <label>QUERY TYPE</label>
        {props.children}
      </div>

      <div className="select-node">
        <label>FROM</label>
        <select name="input_from" value={props.from} onChange={props.handleInput}>
          {
            Object.keys(data_etica).map((node) => {
              return <option key={node} name={node} value={node}>{node}</option>
            })
          }
        </select>
      </div>

      <div className="select-node" hidden={props.queryType !== 'connection'}>
        <label>TO</label>
        <select name="input_to" value={props.to} onChange={props.handleInput}>
          {
            Object.keys(data_etica).map((node) => {
              return <option key={node} name={node} value={node}>{node}</option>
            })
          }
        </select>
      </div>

      <button onClick={props.onClick}> GET DATA </button>

      <div className="instructions-bttn" onClick={props.handleInfoBox}> instructions / credits </div>
    </div>
  )
}