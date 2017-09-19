import React from 'react'

import { ORDINAL_DATA, TIME_SERIES } from 'fakeData'
import { MONOCHROMATIC_COLORS, COLORS } from 'themes/colors'

const LineChartsDemo = props =>
  <section className="demo">
    <header>
      <h3>Line Charts</h3>
    </header>

    <div className="charts charts--d3">
      <div className="chart-panel">
        <h4>Simple Line Series</h4>
      </div>

      <div className="chart-panel">
        <h4>Multiple Line Series</h4>
      </div>

    </div>
  </section>

export default LineChartsDemo
