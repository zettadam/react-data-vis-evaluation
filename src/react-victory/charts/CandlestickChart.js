import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  VictoryAxis,
  VictoryChart,
  VictoryCandlestick
} from 'victory'

import VictoryTheme from './themes'

export default class CandlestickChart extends Component {

  static propTypes = {
    close: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    data: PropTypes.array,
    domainPadding: PropTypes.object,
    events: PropTypes.array,
    high: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    low: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    open: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    scale: PropTypes.object,
    theme: PropTypes.string,
    x: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  }

  static defaultProps = {
    close: 'close',
    domainPadding: { x: 15, y: 0 },
    high: 'high',
    low: 'low',
    open: 'open',
    scale: { x: 'time', y: 'linear' },
    theme: 'qualitativeA',
    x: d => new Date(d.date)
  }

  render () {
    const {
      data,
      domainPadding,
      events,
      scale,
      theme,
      x, open, high, low, close
    } = this.props

    console.log( 'props', this.props)

    const chartProps = {
      domainPadding,
      scale,
      theme: VictoryTheme.spark[theme]
    }

    const candlestickProps = {
      candleColors: { positive: "#5f5c5b", negative: "#c43a31" },
      close,
      high,
      low,
      open,
      data,
      x
    }

    return (
      <VictoryChart { ...chartProps }>
        <VictoryAxis />
        <VictoryAxis dependentAxis />
        <VictoryCandlestick { ...candlestickProps } />
      </VictoryChart>
    )
  }
}
