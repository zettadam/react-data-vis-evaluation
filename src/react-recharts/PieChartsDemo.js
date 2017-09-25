import React from 'react'

import { ORDINAL_DATA, TIME_SERIES } from 'fakeData'
import { MONOCHROMATIC_COLORS, COLORS } from 'themes/colors'

const PieChartsDemo = props =>
  <section className="demo">
    <header>
      <h3>Using React and Recharts library</h3>
    </header>

    <div className="charts charts--d3">
      <div className="chart-panel">
        <h4>Simple Pie</h4>
      </div>

      <div className="chart-panel">
        <h4>Simple Pie Donut</h4>
      </div>

    </div>
  </section>

export default PieChartsDemo