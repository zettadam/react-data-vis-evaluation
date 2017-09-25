import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  VictoryLine,
  VictoryChart,
  VictoryGroup,
  VictoryLegend,
  VictoryTooltip,
  VictoryBrushContainer,
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
    selectionContainerProps: PropTypes.object,
    theme: PropTypes.string,
    width: PropTypes.number,
    xField: PropTypes.string,
    yFields: PropTypes.array,
    zoomContainerProps: PropTypes.object
  }

  static defaultProps = {
    brushContainerProps: {},
    data: [],
    height: 300,
    interpolation: 'natural',
    selectionContainerProps: {},
    theme: 'sequential',
    width: 450,
    xField: '',
    yFields: [],
    zoomContainerProps: {}
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
      brushContainerProps,
      data,
      domainPadding,
      height,
      selectionContainerProps,
      theme,
      width,
      xField,
      yFields,
      zoomContainerProps
    } = this.props

    const adaptedData = adaptData({ data, xField, yFields })

    const chartProps = {
      height,
      theme: VictoryTheme.spark[theme],
      width
    }

    if (domainPadding) chartProps.domainPadding = domainPadding
    // if (brushContainerProps !== {}) chartProps.containerComponent = <VictoryBrushContainer { ...brushContainerProps } />
    // if (selectionContainerProps !== {}) chartProps.containerComponent = <VictorySelectionContainer { ...selectionContainerProps } />
    // if (zoomContainerProps !== {}) chartProps.containerComponent = <VictoryZoomContainer { ...zoomContainerProps } />

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
        <VictoryGroup { ...groupProps }>
        { this.renderLines(adaptedData) }
        </VictoryGroup>
        <VictoryLegend { ...legendProps } />
      </VictoryChart>
    )
  }
}
