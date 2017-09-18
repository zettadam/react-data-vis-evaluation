import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  VictoryAxis,
  VictoryLine,
  VictoryChart,
  VictoryGroup,
  VictoryLegend,
  VictoryTooltip
} from 'victory'

import {
  adaptData,
  createColorScale,
  getLegendData
} from './utils'


export default class LineChart extends Component {

  static propTypes = {
    colors: PropTypes.array,
    data: PropTypes.array,
    interpolation: PropTypes.string,
    xField: PropTypes.string,
    yFields: PropTypes.array
  }

  static defaultProps = {
    colors: [],
    data: [],
    interpolation: 'natural',
    xField: '',
    yFields: []
  }

  constructor (props) {
    super(props)

    this.renderLines = this.renderLines.bind(this)
  }

  renderLines (data) {
    const { interpolation, yFields } = this.props

    return yFields.map((f, i) =>
      <VictoryLine key={ `area${i}` }
        data={ data[i] }
        interpolation={ interpolation }
        labelComponent={
          <VictoryTooltip
            cornerRadius={ 3 }
            pointerLength={ 10 }
            flyoutStyle={{
              stroke: '#000',
              strokeWidth: 1,
              fill: '#202020',
              fillOpacity: 0.9
            }} />
        }
        style={{
          labels: {
            fill: 'rgb(255,255,255)',
            fontSize: '12px'
          }
        }} /> )
  }

  render () {

    const { colors, data, xField, yFields } = this.props

    const colorScale = createColorScale({ colors, fields: yFields })
    const adaptedData = adaptData({ data, xField, yFields })

    const chartProps = {
      domainPadding: { y: 30 }
    }

    const groupProps = {
      categories: { x: data.map(d => d[xField]) },
      colorScale
    }

    const legendProps = {
      colorScale,
      data: getLegendData({ fields: yFields }),
      orientation: 'horizontal',
      width: 400
    }

    return (
      <div>
        <VictoryChart { ...chartProps }>
          <VictoryGroup { ...groupProps }>
          { this.renderLines(adaptedData) }
          </VictoryGroup>
        </VictoryChart>
        <VictoryLegend { ...legendProps } />
      </div>
    )
  }
}
