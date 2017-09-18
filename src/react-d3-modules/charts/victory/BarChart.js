import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
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


export default class BarChart extends Component {

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
    stacked: false,
    xField: '',
    yFields: []
  }

  constructor (props) {
    super(props)

    this.renderBars = this.renderBars.bind(this)
  }

  renderBars (data) {
    const { yFields } = this.props

    return yFields.map((f, i) =>
      <VictoryBar key={ `bar${i}` } data={ data[i] }
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

    const props = {
      categories: { x: data.map(d => d[xField]) },
      colorScale: colorScale,
      offset: 7
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
        { !stacked &&
          <VictoryGroup { ...props }>
            { this.renderBars(adaptedData) }
          </VictoryGroup> }
        { stacked &&
          <VictoryStack { ...props }>
            { this.renderBars(adaptedData) }
          </VictoryStack> }
        </VictoryChart>
        <VictoryLegend { ...legendProps } />
      </div>
    )
  }
}
