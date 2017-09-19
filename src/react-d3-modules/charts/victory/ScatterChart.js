import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  Label,
  Point,
  VictoryScatter,
  VictoryChart,
  VictoryCursorContainer,
  VictoryGroup,
  VictoryLegend,
  VictoryStack,
  VictoryTooltip,
  VictoryZoomContainer
} from 'victory'

import VictoryTheme from './themes'

import {
  adaptData,
  createColorScale,
  getLegendData
} from './utils'


export default class ScatterChart extends Component {

  static propTypes = {
    colors: PropTypes.array,
    data: PropTypes.array,
    domainPadding: PropTypes.object,
    stacked: PropTypes.bool,
    theme: PropTypes.string,
    xField: PropTypes.string,
    yFields: PropTypes.array,
    zoom: PropTypes.boolean
  }

  static defaultProps = {
    colors: [],
    data: [],
    stacked: true,
    theme: 'qualitativeB',
    xField: '',
    yFields: [],
    zoom: false
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
          <VictoryTooltip />
        } /> )
  }

  render () {

    const {
      data,
      domainPadding,
      stacked,
      theme,
      xField,
      yFields,
      zoom
    } = this.props

    const adaptedData = adaptData({ data, xField, yFields })

    const chartProps = {
      theme: VictoryTheme.spark[theme],
    }

    if (domainPadding) chartProps.domainPadding = domainPadding
    if (zoom) chartProps.containerComponent = <VictoryZoomContainer />

    const groupProps = {
      categories: { x: data.map(d => d[xField]) }
    }

    const legendEvents = {
      onClick: this.handleLegendPointClick
    }

    const legendProps = {
      data: getLegendData({ fields: yFields }),
      dataComponent: <Point events={ legendEvents } />,
      orientation: 'horizontal',
      textAnchor: 'middle',
      width: 400
    }

    return (
      <VictoryChart { ...chartProps }>
        <VictoryLegend { ...legendProps } />
        <VictoryGroup { ...groupProps }>
        { this.renderScatter(adaptedData) }
        </VictoryGroup>
      </VictoryChart>
    )
  }
}
