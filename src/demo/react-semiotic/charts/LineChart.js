import React, { Component } from 'react'
import { scaleLinear, scaleTime } from 'd3-scale'
import { Legend, ResponsiveXYFrame } from 'semiotic'

import COLORS from 'common/colorSchemes'
import { CURVE_MAP } from '../common'

export default class AreaChart extends Component {

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
    width: 700,
    xAccessor: 'x',
    xScaleType: scaleTime(),
    xTickFormat: '0',
    xTicks: 12,
    yAccessor: 'y',
    yScaleType: scaleLinear(),
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
      width,
      theme,
      tooltipContent,
      xAccessor, xScaleType, xTickFormat, xTicks,
      yAccessor, yScaleType, yTickFormat, yTicks
    } = this.props

    const colors = COLORS[theme] || []

    const settings = {
      axes: [
        { orient: 'left', format: yTickFormat, ticks: yTicks },
        { orient: 'bottom', format: xTickFormat, ticks: xTicks }
      ],
      download,
      hoverAnnotation,
      legend,
      lines: data,
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
      xAccessor, xScaleType,
      yAccessor, yScaleType
    }

    if (margin) settings.margin = margin
    if (pointStyle) settings.pointStyle = pointStyle
    if (tooltipContent) settings.tooltipContent = tooltipContent

    return (
      <ResponsiveXYFrame { ...settings } />
    )
  }
}
