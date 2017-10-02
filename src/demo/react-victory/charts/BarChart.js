import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  VictoryBar,
  VictoryChart,
  VictoryGroup,
  VictoryLegend,
  VictoryStack,
  VictoryTooltip
} from 'victory'

import VictoryTheme from './themes'

import { adaptData, getLegendData } from './utils'


export default class BarChart extends Component {

  static propTypes = {
    data: PropTypes.array,
    grouped: PropTypes.bool,
    horizontal: PropTypes.bool,
    stacked: PropTypes.bool,
    theme: PropTypes.string,
    xField: PropTypes.string,
    yFields: PropTypes.array
  }

  static defaultProps = {
    data: [],
    grouped: false,
    horizontal: false,
    stacked: false,
    theme: 'qualitativeA',
    xField: '',
    yFields: []
  }

  constructor (props) {
    super(props)

    this.renderBars = this.renderBars.bind(this)
  }

  renderBars (data) {
    const { yFields } = this.props

    return yFields.map((f, i) =>
      <VictoryBar key={ `bar${i}` } data={ data[i] }
        labelComponent={ <VictoryTooltip /> } /> )
  }

  render () {
    const {
      data,
      domainPadding,
      horizontal,
      grouped,
      stacked,
      theme,
      xField,
      yFields
    } = this.props

    const adaptedData = adaptData({ data, xField, yFields })

    const chartProps = {
      theme: VictoryTheme.spark[theme]
    }

    if (domainPadding) chartProps.domainPadding = domainPadding

    const props = {
      categories: { x: data.map(d => d[xField]) },
      horizontal,
      offset: yFields.length - 1
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
          { this.renderBars(adaptedData) }
        </VictoryGroup> }
        { stacked && !grouped &&
        <VictoryStack { ...props }>
          { this.renderBars(adaptedData) }
        </VictoryStack> }
      </VictoryChart>
    )
  }
}
