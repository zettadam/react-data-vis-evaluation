import React from 'react'

import {
  SingleArea,
  SingleAreaBrushZoom
} from './charts/cartesian'

import { TIME_SERIES } from 'fakeData'
import { MONOCHROMATIC_COLORS, COLORS } from 'themes/colors'

const AreaChartsDemo = props =>
  <section className="demo">
    <header>
      <h3>Area Charts</h3>
    </header>

    <div className="charts charts--d3">

      <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Single Area</h4>
        </div>
        <div className="chart-panel__content">
          <SingleArea
            data={ TIME_SERIES['traffic'] }
            xField="date"
            yField="AA" />
        </div>
      </div>

      <div className="chart-panel chart-panel--large">
        <div className="chart-panel__header">
          <h4>Single Area (brush & Zoom)</h4>
        </div>
        <SingleAreaBrushZoom
          data={ TIME_SERIES['price'] }
          dateFormat="%b %Y"
          xField="month"
          yField="usd" />
      </div>

      <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Stacked Area Chart</h4>
        </div>
      </div>

    </div>
  </section>

export default AreaChartsDemo
