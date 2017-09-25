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
      <h3>Using React and D3 (which own the DOM)</h3>
    </header>

    <div className="charts charts--d3">

      <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Single Area</h4>
        </div>
        <div className="chart-panel__content">
          <div className="chart">
            <SingleArea
              data={ TIME_SERIES['traffic'] }
              xField="date"
              yField="AA" />
          </div>
        </div>
      </div>

      <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Stacked Area Chart</h4>
        </div>
        <div className="chart-panel__content">
          <div className="chart" />
        </div>
      </div>

    </div>

    <div className="charts charts--d3">
      <h4>Interactive Charts</h4>

      <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Single Area (brush & Zoom)</h4>
        </div>
        <div className="chart-panel__content">
          <div className="chart">
            <SingleAreaBrushZoom
              data={ TIME_SERIES['price'] }
              dateFormat="%b %Y"
              xField="month"
              yField="usd" />
          </div>
        </div>
      </div>

    </div>
  </section>

export default AreaChartsDemo
