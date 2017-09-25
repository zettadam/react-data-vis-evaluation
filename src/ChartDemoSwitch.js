import React from 'react'

import ReactD3DomDemo from './react-D3-dom/demo'
import ReactDomD3Demo from './react-dom-d3/demo'
import RechartsDemo from './react-recharts/demo'
import VictoryDemo from './react-victory/demo'
import VxDemo from './react-vx/demo'
import ChartJSDemo from './react-chartJS/demo'

const ChartDemoSwitch = ({
  match
}) => {

  const { params: { type, approach }} = match

  return (
    <div className={ `charts--${approach}` }>
      { 'react-d3-dom' === approach && <ReactD3DomDemo type={ type } /> }
      { 'react-dom-d3' === approach && <ReactDomD3Demo type={ type } /> }
      { 'react-recharts' === approach && <RechartsDemo type={ type } /> }
      { 'react-victory' === approach && <VictoryDemo type={ type } /> }
      { 'react-vx' === approach && <VxDemo type={ type } /> }
      { 'react-chartJS' === approach && <ChartJSDemo type={ type } /> }
    </div>
  )
}

export default ChartDemoSwitch
