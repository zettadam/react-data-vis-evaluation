import React from 'react'

import { TIME_SERIES } from 'fakeData'
import { MONOCHROMATIC_COLORS, COLORS } from 'themes/colors'

const AreaChartsDemo = props =>
  <section className="demo">
    <div className="charts charts--vx">

      <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Single Area</h4>
        </div>
        <div className="chart-panel__content">
          <div className="chart" />
        </div>
      </div>

      <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Single Area (brush & Zoom)</h4>
        </div>
        <div className="chart-panel__content">
          <div className="chart" />
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
  </section>

export default AreaChartsDemo
