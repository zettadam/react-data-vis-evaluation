import React from 'react'

import {
  AreaChart,
  BarChart,
  LineChart
} from './charts/recharts'

import { ORDINAL_DATA, TIME_SERIES } from 'fakeData'
import { MONOCHROMATIC_COLORS, COLORS } from 'themes/colors'

const RechartsDemo = props =>
  <section className="demo">
    <header>
      <h3>Recharts Charts Demo</h3>
    </header>
    <p>Here are some charts created using <b><a href="http://recharts.org/">recharts</a></b> library.</p>

    <section className="charts charts--recharts">
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

      <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Single Lines</h4>
        </div>
        <div className="chart-panel__content">
          <LineChart
            colors={ COLORS['sequential'] }
            data={ ORDINAL_DATA[0] }
            xField="x"
            yFields={ ['y1'] } />
        </div>
      </div>

      <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Multiple Lines</h4>
        </div>
        <div className="chart-panel__content">
          <LineChart
            colors={ COLORS['divergent'] }
            data={ ORDINAL_DATA[2] }
            xField="x"
            yFields={ ['y1', 'y2', 'y3', 'y4', 'y5'] } />
        </div>
      </div>

      <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Single Bars</h4>
        </div>
        <div className="chart-panel__content">
          <BarChart
            colors={ COLORS['sequential'] }
            data={ ORDINAL_DATA[0] }
            xField="x"
            yFields={ ['y1'] } />
        </div>
      </div>

      <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Stacked Bars</h4>
        </div>
        <div className="chart-panel__content">
          <BarChart
            colors={ COLORS['qualitative2'] }
            data={ ORDINAL_DATA[2] }
            stacked
            xField="x"
            yFields={ [ 'y1', 'y2', 'y3', 'y4', 'y5' ] } />
        </div>
      </div>

      <div className="chart-panel chart-panel--fullwidth">
        <div className="chart-panel__header">
          <h4>Grouped Bars</h4>
        </div>
        <div className="chart-panel__content">
          <BarChart
            colors={ COLORS['qualitative1'] }
            data={ ORDINAL_DATA[2] }
            grouped
            xField="x"
            yFields={ [ 'y1', 'y2', 'y3', 'y4', 'y5' ] } />
        </div>
      </div>

    </section>
  </section>

export default RechartsDemo
