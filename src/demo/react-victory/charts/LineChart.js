import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  VictoryAxis,
  VictoryLine,
  VictoryChart,
  VictoryGroup,
  VictoryLegend,
  VictoryPortal,
  VictoryTooltip,
  VictoryScatter,
  VictoryVoronoiContainer
} from 'victory'

import VictoryTheme from './themes'

import { adaptData, getLegendData } from './utils'


export default class LineChart extends Component {

  // Props --------------------------------------------------------------------

  static propTypes = {
    annotations: PropTypes.arrayOf(PropTypes.node),
    chartOptions: PropTypes.object,
    colorScale: PropTypes.array,
    data: PropTypes.array,
    domainPadding: PropTypes.object,
    height: PropTypes.number,
    interpolation: PropTypes.string,
    legendOptions: PropTypes.object,
    scale: PropTypes.object,
    theme: PropTypes.string,
    width: PropTypes.number,
    withLegend: PropTypes.bool,
    withLinePoints: PropTypes.bool,
    withTooltips: PropTypes.bool,
    xAxisOptions: PropTypes.object,
    xField: PropTypes.string,
    yAxisOptions: PropTypes.object,
    yFields: PropTypes.array
  }

  static defaultProps = {
    annotations: [],
    data: [],
    height: 300,
    interpolation: 'natural',
    scale: { x: 'time', y: 'linear' },
    theme: 'sequential',
    width: 533,
    withLegend: false,
    withLinePoints: false,
    withTooltips: false,
    xField: '',
    yFields: []
  }


  // Constructor --------------------------------------------------------------

  constructor (props) {
    super(props)

    this._renderLines = this._renderLines.bind(this)
    this._renderPoints = this._renderPoints.bind(this)
  }


  // "Private" render methods -------------------------------------------------

  _renderLines () {
    const { data, interpolation, tooltipOptions, xField, yFields } = this.props

    return yFields.map((f, i) =>
      <VictoryLine key={ `line-${i}` }
        data={ data }
        labels={ d => `y: ${d[f]}` }
        labelComponent={ <VictoryTooltip cornerRadius="0" { ...tooltipOptions } /> }
        x={ xField }
        y={ f }
        interpolation={ interpolation } />
    )
  }

  _renderPoints () {
    const { data, xField, yFields, tooltipOptions } = this.props

    return yFields.map((f, i) =>
      <VictoryScatter key={ `point-${i}` }
        data={ data }
        x={ xField }
        y={ f }
        labels={ d => `y: ${d[f]}` }
        labelComponent={ <VictoryTooltip cornerRadius="0" { ...tooltipOptions }/> } />
    )
  }


  // Render method ------------------------------------------------------------

  render () {

    const {
      annotations,
      chartOptions,
      colorScale,
      data,
      domain,
      domainPadding,
      height,
      legendOptions,
      scale,
      theme,
      width,
      withLegend,
      withLinePoints,
      withTooltips,
      xAxisOptions,
      xField,
      yAxisOptions,
      yFields
    } = this.props

    const adaptedData = adaptData({ data, xField, yFields })

    // main chart props
    let chartProps = {
      height,
      theme: VictoryTheme.spark[theme],
      width
    }
    if (domain) chartProps.domain = domain
    if (domainPadding) chartProps.domainPadding = domainPadding
    if (scale && !xAxisOptions && !yAxisOptions) chartProps.scale = scale
    if (withTooltips) chartProps.containerComponent = <VictoryVoronoiContainer />
    if (chartOptions) chartProps = { ...chartProps, ...chartOptions }

    // group props
    const groupProps = {
      categories: { x: data.map(d => d[xField]) }
    }
    if (colorScale) groupProps.colorScale = colorScale

    // legend props
    let legendProps = {}
    if (withLegend) {
      legendProps = {
        data: getLegendData({ fields: yFields }),
        ...legendOptions
      }
      if (colorScale) legendProps.colorScale = colorScale
    }

    return (
      <VictoryChart key="chart" { ...chartProps }>

        <VictoryAxis
          fixLabelOverlap
          { ...xAxisOptions } />

        <VictoryAxis
          dependentAxis
          fixLabelOverlap
          { ...yAxisOptions } />

        <VictoryGroup { ...groupProps }>
          { this._renderLines() }
        </VictoryGroup>

        { withLinePoints &&
        <VictoryGroup { ...groupProps }>
          { this._renderPoints() }
        </VictoryGroup> }

        { annotations }

        { withLegend &&
          <VictoryLegend { ...legendProps } /> }

      </VictoryChart>
    )
  }
}
