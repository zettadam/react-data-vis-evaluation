import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  Label,
  Point,
  VictoryAxis,
  VictoryScatter,
  VictoryChart,
  VictoryCursorContainer,
  VictoryGroup,
  VictoryLegend,
  VictoryStack,
  VictoryTooltip
} from 'victory'

import {
  adaptData,
  createColorScale,
  getLegendData
} from './utils'


export default class ScatterChart extends Component {

  static propTypes = {
    colors: PropTypes.array,
    data: PropTypes.array,
    stacked: PropTypes.bool,
    xField: PropTypes.string,
    yFields: PropTypes.array
  }

  static defaultProps = {
    colors: [],
    data: [],
    stacked: true,
    xField: '',
    yFields: []
  }

  constructor (props) {
    super(props)

    this.handleLegendPointClick = this.handleLegendPointClick.bind(this)
    this.renderScatter = this.renderScatter.bind(this)
  }

  handleLegendPointClick () {
    console.log( 'Clicked on legend data point', arguments)
  }

  renderScatter (data) {
    const { yFields } = this.props

    return yFields.map((f, i) =>
      <VictoryScatter key={ `point${i}` }
        data={ data[i] }
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
    const { colors, data, stacked, xField, yFields } = this.props

    const colorScale = createColorScale({ colors, fields: yFields })
    const adaptedData = adaptData({ data, xField, yFields })

    const chartProps = {
      domainPadding: { x: 20, y: 20 }
    }

    const groupProps = {
      categories: { x: data.map(d => d[xField]) },
      colorScale
    }

    const legendEvents = {
      onClick: this.handleLegendPointClick
    }

    const legendProps = {
      colorScale,
      data: getLegendData({ fields: yFields }),
      dataComponent: <Point events={ legendEvents } />,
      orientation: 'horizontal',
      textAnchor: 'middle',
      width: 400
    }

    return (
      <div>
        <VictoryChart { ...chartProps }>
          <VictoryGroup { ...groupProps }>
          { this.renderScatter(adaptedData) }
          </VictoryGroup>
        </VictoryChart>
        <VictoryLegend { ...legendProps } />
      </div>
    )
  }
}
