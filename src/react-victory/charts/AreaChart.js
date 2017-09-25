import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  VictoryArea,
  VictoryChart,
  VictoryCursorContainer,
  VictoryGroup,
  VictoryLegend,
  VictoryStack,
  VictoryTooltip
} from 'victory'

import VictoryTheme from './themes'

import { adaptData, getLegendData } from './utils'


export default class AreaChart extends Component {

  static propTypes = {
    canZoom: PropTypes.bool,
    data: PropTypes.array,
    interpolation: PropTypes.string,
    stacked: PropTypes.bool,
    theme: PropTypes.string,
    xField: PropTypes.string,
    yFields: PropTypes.array
  }

  static defaultProps = {
    canZoom: false,
    data: [],
    interpolation: 'monotoneX',
    stacked: false,
    theme: 'divergent',
    xField: '',
    yFields: []
  }

  constructor (props) {
    super(props)

    this.renderAreas = this.renderAreas.bind(this)
  }

  renderAreas (data) {
    const { interpolation, yFields } = this.props

    return yFields.map((f, i) =>
      <VictoryArea key={ `area${i}` } data={ data[i] } interpolation={ interpolation }
        labelComponent={ <VictoryTooltip /> } />
    )
  }

  render () {
    const {
      canZoom,
      data,
      domainPadding,
      stacked,
      theme,
      xField,
      yFields,
      withCursorContainer
    } = this.props

    const adaptedData = adaptData({ data, xField, yFields })

    const chartProps = {
      theme: VictoryTheme.spark[theme]
    }

    if (domainPadding) chartProps.domainPadding = domainPadding
    if (canZoom) chartProps.containerComponent = <VictoryZoomContainer />

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
