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

import { adaptData, getLegendData } from './utils'


export default class LineChart extends Component {

  static propTypes = {
    canZoom: PropTypes.bool,
    data: PropTypes.array,
    interpolation: PropTypes.string,
    theme: PropTypes.string,
    xField: PropTypes.string,
    yFields: PropTypes.array
  }

  static defaultProps = {
    canZoom: false,
    data: [],
    interpolation: 'natural',
    theme: 'sequential',
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
        labelComponent={ <VictoryTooltip /> } />
    )
  }

  render () {

    const {
      canZoom,
      data,
      domainPadding,
      theme,
      xField,
      yFields
    } = this.props

    const adaptedData = adaptData({ data, xField, yFields })

    const chartProps = {
      theme: VictoryTheme.spark[theme]
    }

    if (domainPadding) chartProps.domainPadding = domainPadding
    if (canZoom) chartProps.containerComponent = <VictoryZoomContainer />

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
