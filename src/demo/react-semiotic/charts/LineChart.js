import React, { Component } from 'react'
import { scaleTime } from 'd3-scale'
import { ResponsiveXYFrame } from 'semiotic'

import { CURVE_MAP } from '../common'

const yTickFormat = i => {
  let o = i
  if (i > 999 && i < 1000000) o = `${i/1000}K`
  if (i > 999999) o = `${i/1000000}M`
  return o
}

export default class AreaChart extends Component {

  static defaultProps = {
    colors: [],
    data: [],
    download: false,
    height: 400,
    hoverAnnotation: true,
    interpolation: 'monotoneX',
    responsiveHeight: true,
    responsiveWidth: true,
    width: 700,
    xAccessor: 'x',
    yAccessor: 'y'
  }

  render () {

    const {
      colors,
      data,
      download,
      height,
      hoverAnnotation,
      interpolation,
      margin,
      responsiveHeight,
      responsiveWidth,
      width,
      xAccessor,
      yAccessor
    } = this.props

    const settings = {
      axes: [
        { orient: 'left', tickFormat: yTickFormat },
        { orient: 'bottom', tickFormat: d => d.getMonth() + "/" + d.getDate() }
      ],
      download,
      hoverAnnotation,
      lines: data,
      lineStyle: { stroke: '#00a2ce' },
      lineType: { type: 'line', interpolator: CURVE_MAP[interpolation] },
      margin,
      pointStyle: { fill: "#00a2ce" },
      responsiveHeight,
      responsiveWidth,
      showLinePoints: true,
      size: [ width, height ],
      xScaleType: scaleTime(),
      xAccessor: xAccessor,
      yAccessor: yAccessor
    }

    return (
      <ResponsiveXYFrame { ...settings } />
    )
  }
}
