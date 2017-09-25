import React from 'react'

import { LineChart } from './charts'
import { ORDINAL_DATA, TIME_SERIES } from 'fakeData'
import { MONOCHROMATIC_COLORS, COLORS } from 'themes/colors'

const LineChartsDemo = props =>
  <section className="demo">
    <header>
      <h3>Using React and Recharts library</h3>
    </header>

    <div className="charts charts--recharts">

    <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Single Lines</h4>
        </div>
        <div className="chart-panel__content">
          <div className="chart">
            <LineChart
              colors={ COLORS['sequential'] }
              data={ ORDINAL_DATA[0] }
              xField="x"
              yFields={ ['y1'] } />
          </div>
        </div>
      </div>

      <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Multiple Lines</h4>
        </div>
        <div className="chart-panel__content">
          <div className="chart">
            <LineChart
              colors={ COLORS['divergent'] }
              data={ ORDINAL_DATA[2] }
              xField="x"
              yFields={ ['y1', 'y2', 'y3', 'y4', 'y5'] } />
          </div>
        </div>
      </div>

    </div>

  </section>

export default LineChartsDemo
