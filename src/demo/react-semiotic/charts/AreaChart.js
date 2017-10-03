import React from 'react'

const Semiotic = require('semiotic')

console.log( 'Semiotic', Semiotic)

const AreaChart = (
  colors = [],
  data = [],
  height = 400,
  marginTop = 60,
  marginRight = 20,
  marginBottom = 60,
  marginLeft = 60,
  width = 700,
  xAccessor = 'x',
  yAccessor = 'y'
) =>
  <Semiotic.XYFrame
    size={[ width, height ]}
    lines={ data }
    lineStyle={ d => ({ fill: d.color, fillOpacity: 0.5, stroke: d.color, strokeWidth: '3px' }) }
    xAccessor={ xAccessor }
    yAccessor={ yAccessor }
    margin={{
      top: marginTop,
      right: marginRight,
      bottom: marginBottom,
      left: marginLeft
    }}
    axes={[
      { orient: 'left', tickFormat: d => d },
      { orient: 'bottom', tickFormat: d => d }
    ]} />

export default AreaChart
