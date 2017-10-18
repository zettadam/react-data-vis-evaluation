import React, { Component } from 'react'
import { scaleLinear, scaleOrdinal, scaleTime } from 'd3-scale'
import { timeFormat, timeParse } from 'd3-time-format'

import { Legend, ResponsiveXYFrame } from 'semiotic'

import COLORS from 'common/colorSchemes'
import { CURVE_MAP } from '../common'

const SCALE_MAP = {
  linear: scaleLinear,
  ordinal: scaleOrdinal,
  time: scaleTime
}

const createLines = ({
  data,
  timeFormat,
  xAccessor, xField, xScaleType,
  yAccessor, yFields, yScaleType
}) => {
  const parseTime = timeParse(timeFormat)
  const lines = yFields.map(y => ({
    coordinates: data.map(d => ({
      [xAccessor]: xScaleType === 'time' ? parseTime(d[xField]) : d[xField],
      [yAccessor]: d[y]
    }))
  }))

  console.log( 'lines', lines)

  return lines
}

export default class LineChart extends Component {

  static defaultProps = {
    data: [],
    download: false,
    height: 400,
    hoverAnnotation: true,
    interpolation: 'monotoneX',
    legend: false,
    matte: false,
    responsiveHeight: true,
    responsiveWidth: true,
    showLinePoints: false,
    theme: 'schemeAccent',
    timeFormat: '%Y-%m-%d',
    width: 700,
    xAccessor: 'x',
    xAxisClassName: 'x-axis',
    xScaleType: 'time',
    xTickFormat: '0',
    xTicks: 12,
    yAccessor: 'y',
    yAxisClassName: 'y-axis',
    yScaleType: 'linear',
    yTickFormat: '0',
    yTicks: 12
  }

  render () {

    const {
      data,
      download,
      height,
      hoverAnnotation,
      interpolation,
      legend,
      margin,
      matte,
      pointStyle,
      responsiveWidth,
      showLinePoints,
      timeFormat,
      theme,
      tooltipContent,
      width,
      xAccessor, xAxisClassName, xField, xScaleType, xTickFormat, xTicks,
      yAccessor, yAxisClassName, yFields, yScaleType, yTickFormat, yTicks
    } = this.props

    const colors = COLORS[theme] || []

    const lines = createLines({
      data,
      timeFormat,
      xAccessor,
      xField,
      xScaleType,
      yAccessor,
      yFields,
      yScaleType
    })

    const settings = {
      axes: [
        { className: yAxisClassName, orient: 'left', tickFormat: yTickFormat, ticks: yTicks },
        { className: xAxisClassName, orient: 'bottom', tickFormat: xTickFormat, ticks: xTicks }
      ],
      download,
      hoverAnnotation,
      legend,
      lines,
      lineStyle: (d, i) => ({ stroke: colors[i % colors.length], strokeWidth: 2 }),
      lineType: { type: 'line', interpolator: CURVE_MAP[interpolation] },
      pointStyle: (d, i) => ({
        fill: 'rgba(255,255,255,0)',
        stroke: 'rgba(0,0,0,0.25)',
        strokeWidth: 2
      }),
      responsiveWidth,
      showLinePoints,
      size: [ width, height ],
      xAccessor,
      xScaleType: typeof SCALE_MAP[xScaleType] === 'function' ? SCALE_MAP[xScaleType]() : SCALE_MAP['time'](),
      yAccessor,
      yScaleType: typeof SCALE_MAP[yScaleType] === 'function' ? SCALE_MAP[yScaleType]() : SCALE_MAP['linear']()
    }

    if (margin) settings.margin = margin
    if (pointStyle) settings.pointStyle = pointStyle
    if (tooltipContent) settings.tooltipContent = tooltipContent

    return (
      <ResponsiveXYFrame { ...settings } />
    )
  }
}
