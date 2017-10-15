import React, { Component } from 'react'
import { scaleLinear, scaleTime } from 'd3-scale'
import { ResponsiveXYFrame } from 'semiotic'

import { COLORS, CURVE_MAP } from '../common'

export default class AreaChart extends Component {

  static defaultProps = {
    data: [],
    height: 400,
    hoverAnnotation: true,
    interpolation: 'monotoneX',
    legend: false,
    matte: false,
    responsiveWidth: true,
    theme: 'schemeAccent',
    width: 700,
    xAccessor: 'x',
    xScaleType: scaleTime(),
    xTickFormat: '0',
    xTicks: 12,
    yAccessor: 'y',
    yScale: scaleLinear(),
    yTickFormat: '0',
    yTicks: 12
  }

  render () {

    const {
      data,
      height,
      hoverAnnotation,
      interpolation,
      legend,
      margin,
      matte,
      responsiveWidth,
      theme,
      tooltipContent,
      width,
      xAccessor, xScaleType, xTickFormat, xTicks,
      yAccessor, yScaleType, yTickFormat, yTicks
    } = this.props

    const colors = COLORS[theme] || []

    const settings = {
      areas: data,
      areaStyle: (d, i) => ({ fill: colors[i % colors.length] }),
      axes: [
        { orient: 'left', format: yTickFormat, ticks: yTicks },
        { orient: 'bottom', format: xTickFormat, ticks: xTicks }
      ],
      hoverAnnotation,
      legend,
      lineType: { type: 'line', interpolator: CURVE_MAP[interpolation] },
      matte,
      responsiveWidth,
      size: [ width, height ],
      xAccessor, xScaleType,
      yAccessor, yScaleType
    }

    if (margin) settings.margin = margin
    if (tooltipContent) settings.tooltipContent = tooltipContent

    return (
      <ResponsiveXYFrame { ...settings } />
    )
  }
}
