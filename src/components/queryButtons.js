import React from 'react'

export default function QueryButtons (props) {
  const options = [
    {href:'#adjacent', id:'adjacent', name:'getAdjacent', label: 'Get Adjacent'},
    {href:'#children', id:'children', name:'children', label: 'Get Children'},
    {href:'#parents', id:'parents', name:'parents', label: 'Get Parents'},
    {href:'#connection', id:'connection', name:'connection', label: 'Get Connection'},
    // {href: '#ancestors', id:'ancestors', name:'getAncestorsGreuler', label:'Get Ancestors'},
    // {href: '#descendants', id:'descendants', name:'getDescendantsGreuler', label:'Get Descendants'},
  ]
  return (
    <select value={props.query_type} onChange={props.selectQueryType} >
      { options.map((x, index) => <option key={x.id} id={x.id} name={x.name} value={x.name}>{x.label}</option>) }
    </select>
  )
}