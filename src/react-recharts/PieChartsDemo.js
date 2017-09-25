import React from 'react'

import { ORDINAL_DATA, TIME_SERIES } from 'fakeData'
import { MONOCHROMATIC_COLORS, COLORS } from 'themes/colors'

const PieChartsDemo = props =>
  <section className="demo">
    <header>
      <h3>Using React and Recharts library</h3>
    </header>

    <div className="charts charts--recharts">

      <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Simple Pie</h4>
        </div>
        <div className="chart-panel__content" />
      </div>

      <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Simple Pie</h4>
        </div>
        <div className="chart-panel__content" />
      </div>

    </div>

  </section>

export default PieChartsDemo
