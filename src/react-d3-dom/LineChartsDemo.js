import React from 'react'

import { ORDINAL_DATA, TIME_SERIES } from 'fakeData'
import { MONOCHROMATIC_COLORS, COLORS } from 'themes/colors'

const LineChartsDemo = props =>
  <section className="demo">

    <div className="charts charts--d3">
      <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Simple Line Series</h4>
        </div>
        <div className="chart-panel__content">
          <div className="chart" />
        </div>
      </div>

      <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Multiple Line Series</h4>
        </div>
        <div className="chart-panel__content">
          <div className="chart" />
        </div>
      </div>

    </div>
  </section>

export default LineChartsDemo
