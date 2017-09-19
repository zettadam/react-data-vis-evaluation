import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  VictoryArea,
  VictoryChart,
  VictoryGroup,
  VictoryLegend,
  VictoryStack,
  VictoryTooltip
} from 'victory'

import VictoryTheme from './themes'

import {
  adaptData,
  createColorScale,
  getLegendData
} from './utils'


export default class AreaChart extends Component {

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

    this.renderAreas = this.renderAreas.bind(this)
  }

  renderAreas (data) {
    const { yFields } = this.props

    return yFields.map((f, i) =>
      <VictoryArea key={ `area${i}` }
        data={ data[i] }
        labelComponent={
          <VictoryTooltip />
        } /> )
  }

  render () {
    const { data, stacked, xField, yFields } = this.props

    const adaptedData = adaptData({ data, xField, yFields })

    const chartProps = {
      domainPadding: { y: 20 },
      theme: VictoryTheme.spark.divergent
    }

    const props = {
      categories: { x: data.map(d => d[xField]) }
    }

    const legendProps = {
      data: getLegendData({ fields: yFields }),
      orientation: 'horizontal',
      width: 400
    }

    return (
      <VictoryChart { ...chartProps }>
        <VictoryLegend { ...legendProps } />
        { !stacked &&
        <VictoryGroup { ...props }>
          { this.renderAreas(adaptedData) }
        </VictoryGroup> }
        { stacked &&
        <VictoryStack { ...props }>
          { this.renderAreas(adaptedData) }
        </VictoryStack> }
      </VictoryChart>
    )
  }
}
