import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  VictoryAxis,
  VictoryLine,
  VictoryChart,
  VictoryGroup,
  VictoryLegend,
  VictoryTooltip,
  VictoryBrushContainer,
  VictoryScatter,
  VictorySelectionContainer,
  VictoryZoomContainer
} from 'victory'

import VictoryTheme from './themes'

import { adaptData, getLegendData } from './utils'


export default class LineChart extends Component {

  static propTypes = {
    brushContainerProps: PropTypes.object,
    data: PropTypes.array,
    domainPadding: PropTypes.object,
    height: PropTypes.number,
    interpolation: PropTypes.string,
    legendOptions: PropTypes.object,
    scale: PropTypes.object,
    selectionContainerProps: PropTypes.object,
    theme: PropTypes.string,
    width: PropTypes.number,
    xField: PropTypes.string,
    yFields: PropTypes.array,
    zoomContainerProps: PropTypes.object
  }

  static defaultProps = {
    data: [],
    height: 300,
    interpolation: 'natural',
    legendOptions: {
      orientation: 'horizontal',
      x: 0, y: 0
    },
    scale: { x: 'time', y: 'linear' },
    showLinePoints: false,
    theme: 'sequential',
    width: 450,
    xField: '',
    yFields: []
  }

  constructor (props) {
    super(props)

    this.renderLines = this.renderLines.bind(this)
    this.renderPoints = this.renderPoints.bind(this)
  }

  renderLines () {
    const { data, interpolation, xField, yFields } = this.props

    return yFields.map((f, i) =>
      <VictoryLine key={ `line-${i}` }
        data={ data }
        events={[{
          target: 'data',
          eventHandlers: {
            onClick: () => ({
              target: 'data',
              mutation: props => ({
                style: { ...props.style, strokeWidth: 3 }
              })
            })
          }
        }]}
        x={ xField }
        y={ f }
        interpolation={ interpolation } />
    )
  }

  renderPoints () {
    const { data, xField, yFields } = this.props

    return yFields.map((f, i) =>
      <VictoryScatter key={ `point-${i}` }
        data={ data }
        x={ xField }
        y={ f }
        labels={ d => `y: ${d[f]}` }
        labelComponent={ <VictoryTooltip /> } />
    )
  }

  render () {

    const {
      brushContainerProps,
      data,
      domain,
      domainPadding,
      height,
      legendOptions,
      scale,
      selectionContainerProps,
      showLinePoints,
      theme,
      width,
      xAxisProps,
      xField,
      yAxisProps,
      yFields,
      zoomContainerProps
    } = this.props

    const adaptedData = adaptData({ data, xField, yFields })

    const chartProps = {
      height,
      theme: VictoryTheme.spark[theme],
      width
    }

    if (domain) chartProps.domain = domain
    if (domainPadding) chartProps.domainPadding = domainPadding
    // if (brushContainerProps) chartProps.containerComponent = <VictoryBrushContainer { ...brushContainerProps } />
    // if (selectionContainerProps) chartProps.containerComponent = <VictorySelectionContainer { ...selectionContainerProps } />
    if (scale && !xAxisProps && !yAxisProps) chartProps.scale = scale
    if (zoomContainerProps) chartProps.containerComponent = <VictoryZoomContainer { ...zoomContainerProps } />

    const groupProps = {
      categories: { x: data.map(d => d[xField]) }
    }

    const legendProps = {
      data: getLegendData({ fields: yFields }),
      ...legendOptions
    }

    return (
      <VictoryChart { ...chartProps }>
        <VictoryLegend { ...legendProps } />
        { xAxisProps &&
        <VictoryAxis { ...xAxisProps } /> }
        { yAxisProps &&
        <VictoryAxis { ...yAxisProps } /> }
        <VictoryGroup { ...groupProps }>
          { this.renderLines() }
        </VictoryGroup>
        { showLinePoints &&
        <VictoryGroup { ...groupProps }>
          { this.renderPoints() }
        </VictoryGroup> }
      </VictoryChart>
    )
  }
}
