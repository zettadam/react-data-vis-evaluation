import React from 'react'

import { AreaChart } from './charts'
import { ORDINAL_DATA, TIME_SERIES } from 'fakeData'
import { MONOCHROMATIC_COLORS, COLORS } from 'themes/colors'

const AreaChartsDemo = props =>
  <section className="demo">

    <section className="charts charts--chartjs">

      <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Single Area</h4>
        </div>
        <div className="chart-panel__content">
          <AreaChart
            colors={ COLORS['sequential'] }
            data={ ORDINAL_DATA[0] }
            xField="x"
            yFields={ ['y1'] } />
        </div>
      </div>

      <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Grouped Area</h4>
        </div>
        <div className="chart-panel__content">
          <AreaChart
            colors={ COLORS['qualitative2'] }
            data={ ORDINAL_DATA[2] }
            xField="x"
            yFields={ ['y1', 'y2', 'y3', 'y4', 'y5'] }
            stacked
            stackOffset="expand" />
        </div>
      </div>

      <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Stacked Area</h4>
        </div>
        <div className="chart-panel__content">
          <AreaChart
            colors={ COLORS['qualitative2'] }
            data={ ORDINAL_DATA[2] }
            xField="x"
            yFields={ ['y1', 'y2', 'y3', 'y4', 'y5'] }
            stacked
            stackOffset="expand" />
        </div>
      </div>

    </section>

  </section>

export default AreaChartsDemo
