import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  createContainer,
  VictoryAxis,
  VictoryBrushContainer,
  VictoryLine,
  VictoryChart,
  VictoryGroup,
  VictoryLegend,
  VictoryPortal,
  VictoryTooltip,
  VictoryScatter,
  VictoryZoomContainer
} from 'victory'

import VictoryTheme from './themes'

import { adaptData, getLegendData } from './utils'


export default class MinimapLineChart extends Component {

  // Props --------------------------------------------------------------------

  static propTypes = {
    annotations: PropTypes.arrayOf(PropTypes.node),
    chartOptions: PropTypes.object,
    chartContainers: PropTypes.array,
    chartContainerProps: PropTypes.object,
    data: PropTypes.array,
    domainPadding: PropTypes.object,
    flyout: PropTypes.node,
    height: PropTypes.number,
    interpolation: PropTypes.string,
    legendProps: PropTypes.object,
    scale: PropTypes.object,
    theme: PropTypes.string,
    tooltipProps: PropTypes.object,
    width: PropTypes.number,
    withLinePoints: PropTypes.bool,
    xAxis: PropTypes.object,
    xField: PropTypes.string,
    yAxis: PropTypes.object,
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
    tooltipProps: {
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
    withLinePoints: false,
    xField: '',
    yFields: []
  }


  // Constructor --------------------------------------------------------------

  constructor (props) {
    super(props)

    this.state = {
    }

    const c = props.chartContainers

    if (Array.isArray(c)) {
      if (c.length === 1) this.chartContainer = createContainer(c[0])
      if (c.length >= 2) this.chartContainer = createContainer(c[0], c[1])
    }

    this._renderLines = this._renderLines.bind(this)
    this._renderPoints = this._renderPoints.bind(this)
  }

  handleBrush (domain) {
    this.setState({ domain })
  }

  handleZoom (domain) {
    this.setState({ domain })
  }


  // "Private" render methods -------------------------------------------------

  _renderLines () {
    const {
      data,
      interpolation,
      xField,
      yFields
    } = this.props

    return yFields.map(y =>
      <VictoryLine key={ `line-${y}` }
        data={ data }
        interpolation={ interpolation }
        x={ xField }
        y={ y } />
    )
  }

  _renderPoints () {
    const { data, flyout, xField, yFields, tooltipProps } = this.props

    if (flyout) tooltipProps.flyoutComponent = flyout

    return yFields.map((y, i) =>
      <VictoryScatter key={ `point-${y}` }
        data={ data }
        x={ xField }
        y={ y }
        labels={ d => d[y] }
        labelComponent={
          <VictoryTooltip { ...tooltipProps }/>
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
      domainPadding,
      height,
      interpolation,
      legendProps,
      scale,
      theme,
      width,
      withLinePoints,
      xAxis,
      xField,
      yAxis,
      yFields
    } = this.props

    const {
      domain
    } = this.state

    // main chart props
    let chartProps = {
      height,
      theme: VictoryTheme.spark[theme],
      width
    }

    if (domainPadding) chartProps.domainPadding = domainPadding
    if (scale) chartProps.scale = scale
    if (chartOptions) chartProps = { ...chartProps, ...chartOptions }

    // group props
    const groupProps = {
      categories: { x: data.map(d => d[xField]) }
    }

    const minimapChartProps = {
      height: 100,
      theme: VictoryTheme.spark[theme],
      width
    }

    return (
      <div>
        <VictoryChart key="chart" { ...chartProps }
          containerComponent={
            <VictoryZoomContainer
              zoomDimension="x"
              zoomDomain={ domain }
              onZoomDomainChange={ this.handleZoom.bind(this) }
            />
          }>

          <VictoryAxis
            fixLabelOverlap
            { ...xAxis } />

          <VictoryAxis
            dependentAxis
            fixLabelOverlap
            { ...yAxis } />

          <VictoryGroup { ...groupProps }>
            { this._renderLines() }
          </VictoryGroup>

          { withLinePoints &&
          <VictoryGroup { ...groupProps }>
            { this._renderPoints() }
          </VictoryGroup> }

          { annotations }

          { legendProps &&
            <VictoryLegend { ...legendProps }
              data={ getLegendData({ fields: yFields }) }/> }

        </VictoryChart>

        <VictoryChart key="minimap" { ...minimapChartProps }
          containerComponent={
            <VictoryBrushContainer
              brushDimension="x"
              brushDomain={ domain }
              onBrushDomainChange={ this.handleBrush.bind(this) }/>
          }>

          <VictoryAxis
            fixLabelOverlap
            scale="time"
            style={{
              axisLabel: { fontSize: 8, textAnchor: 'start' },
              tickLabels: { fontSize: 8 }
            }} />

          <VictoryLine key={ `line-${yFields[0]}` }
            data={ data }
            interpolation={ interpolation }
            x={ xField }
            y={ yFields[0] } />

        </VictoryChart>
      </div>
    )
  }
}
