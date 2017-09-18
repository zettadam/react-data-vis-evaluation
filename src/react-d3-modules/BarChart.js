import React from 'react'
import { BarGroup } from '@vx/shape'
import { Group } from '@vx/group'
import { AxisBottom } from '@vx/axis'
import { scaleBand, scaleLinear, scaleOrdinal } from '@vx/scale'
import { extent, max } from 'd3-array'

// accessors
const x0 = d => d.airlineCode
const y = d => d.traffic

export default ({
  data,
  width,
  height,
  margin = {
    top: 40
  }
}) => {
  if (width < 10) return null

  const keys = data.map( d => d.airlineCode )

  // bounds
  const xMax = width
  const yMax = height - margin.top - 100

  // // scales
  const x0Scale = scaleBand({
    rangeRound: [0, xMax],
    domain: data.map(x0),
    padding: 0.2,
    tickFormat: () => v => v
  })

  const x1Scale = scaleBand({
    rangeRound: [0, x0Scale.bandwidth()],
    domain: keys,
    padding: .1
  })

  const yScale = scaleLinear({
    rangeRound: [yMax, 0],
    domain: [0, max(data, (d) => {
      return max(keys, (key) => d[key])
    })],
  })

  const zScale = scaleOrdinal({
    domain: keys,
    range: [ '#ccc', '#bbb', '#aaa', '#999', '#888' ]
  })

  return (
    <svg width={ width } height={ height }>
      <rect
        x={ 0 }
        y={ 0 }
        width={ width }
        height={ height }
        fill="#fff"
        rx={ 14 } />
      <BarGroup
        top={ margin.top }
        data={ data }
        keys={ keys }
        height={ yMax }
        x0={ x0 }
        y={ y }
        x0Scale={ x0Scale }
        x1Scale={ x1Scale }
        yScale={ yScale }
        zScale={ zScale }
        rx={ 4 }
        onClick={ data => event => {
          alert( `clicked: ${JSON.stringify(data)}` )
        }} />
      <AxisBottom
        scale={ x0Scale }
        top={ yMax + margin.top}
        stroke="#e5fd3d"
        tickStroke="#e5fd3d"
        tickLabelProps={ (value, index) => ({
          fill: '#e5fd3d',
          fontSize: 11,
          textAnchor: 'middle',
        }) } />
    </svg>
  )
}
