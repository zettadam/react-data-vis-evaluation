import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  VictoryLine,
  VictoryChart,
  VictoryGroup,
  VictoryLegend,
  VictoryTooltip,
  VictoryZoomContainer
} from 'victory'

import VictoryTheme from './themes'

import {
  adaptData,
  createColorScale,
  getLegendData
} from './utils'


export default class LineChart extends Component {

  static propTypes = {
    data: PropTypes.array,
    interpolation: PropTypes.string,
    theme: PropTypes.string,
    xField: PropTypes.string,
    yFields: PropTypes.array,
    zoom: PropTypes.boolean
  }

  static defaultProps = {
    colors: [],
    data: [],
    interpolation: 'natural',
    theme: 'sequential',
    xField: '',
    yFields: [],
    zoom: false
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
          <VictoryTooltip />
        } /> )
  }

  render () {

    const {
      data,
      domainPadding,
      theme,
      xField,
      yFields,
      zoom
    } = this.props

    const adaptedData = adaptData({ data, xField, yFields })

    const chartProps = {
      theme: VictoryTheme.spark[theme]
    }

    if (domainPadding) chartProps.domainPadding = domainPadding
    if (zoom) chartProps.containerComponent = <VictoryZoomContainer />

    const groupProps = {
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
        <VictoryGroup { ...groupProps }>
        { this.renderLines(adaptedData) }
        </VictoryGroup>
      </VictoryChart>
    )
  }
}
