import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  createContainer,
  VictoryAxis,
  VictoryLine,
  VictoryChart,
  VictoryGroup,
  VictoryLegend,
  VictoryPortal,
  VictoryTooltip,
  VictoryScatter
} from 'victory'

import VictoryTheme from './themes'

import { adaptData, getLegendData } from './utils'


export default class LineChart extends Component {

  // Props --------------------------------------------------------------------

  static propTypes = {
    annotations: PropTypes.arrayOf(PropTypes.node),
    chartOptions: PropTypes.object,
    chartContainers: PropTypes.array,
    chartContainerProps: PropTypes.object,
    colorScale: PropTypes.array,
    data: PropTypes.array,
    domainPadding: PropTypes.object,
    flyout: PropTypes.node,
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
    chartContainerProps: {},
    data: [],
    height: 300,
    interpolation: 'natural',
    scale: { x: 'time', y: 'linear' },
    theme: 'sequential',
    tooltipOptions: {
      cornerRadius: 0,
      flyoutStyle: {
        fill: '#36454f',
        fillOpacity: 0.85,
        stroke: '#36454f'
      },
      pointerLength: 10,
      renderInPortal: true
    },
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

    const cts = props.chartContainers

    if (Array.isArray(cts)) {
      if (cts.length === 1) this.chartContainer = createContainer(cts[0])
      if (cts.length >= 2) this.chartContainer = createContainer(cts[0], cts[1])
    }

    this._renderLines = this._renderLines.bind(this)
    this._renderPoints = this._renderPoints.bind(this)
  }


  // "Private" render methods -------------------------------------------------

  _renderLines () {
    const {
      chartContainers,
      data,
      flyout,
      interpolation,
      tooltipOptions,
      withLinePoints,
      xField,
      yFields
    } = this.props

    const withTooltips = !withLinePoints && chartContainers && chartContainers.includes('voronoi')

    const lineProps = {
      data,
      interpolation,
      x: xField,
    }
    if (withTooltips) {
      if (flyout) tooltipOptions.flyoutComponent = flyout
      lineProps.labelComponent = <VictoryTooltip { ...tooltipOptions } />
    }


    return yFields.map((f, i) => {
      const fieldProps = {
        key: `line-${f}`,
        y: f
      }
      if (withTooltips) fieldProps.labels = d => d[f]

      return (
        <VictoryLine { ...lineProps } { ...fieldProps } />
      )
    })
  }

  _renderPoints () {
    const { data, flyout, xField, yFields, tooltipOptions } = this.props

    if (flyout) tooltipOptions.flyoutComponent = flyout

    return yFields.map((f, i) =>
      <VictoryScatter key={ `point-${i}` }
        data={ data }
        x={ xField }
        y={ f }
        labels={ d => d[f] }
        labelComponent={
          <VictoryTooltip { ...tooltipOptions }/>
        } />
    )
  }


  // Render method ------------------------------------------------------------

  render () {

    const {
      annotations,
      chartContainers,
      chartContainerProps,
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

    if (this.chartContainer) chartProps.containerComponent = <this.chartContainer { ...chartContainerProps } />
    if (domain) chartProps.domain = domain
    if (domainPadding) chartProps.domainPadding = domainPadding
    if (scale && !xAxisOptions && !yAxisOptions) chartProps.scale = scale
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
