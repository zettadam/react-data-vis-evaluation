import React from 'react'

import { BarChart, GroupedBarChart } from './charts'
import { ORDINAL_DATA } from 'fakeData'
import { MONOCHROMATIC_COLORS, COLORS } from 'themes/colors'

const BarChartsDemo = props =>
  <section className="demo">
    <header>
      <h3>Using React and VX library</h3>
    </header>

    <div className="charts charts--vx">

      <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Single Bars</h4>
        </div>
        <div className="chart-panel__content">
          <BarChart
            colors={ COLORS['qualitative1'] }
            data={ ORDINAL_DATA[2] }
            xField="x" xLabel="Airlines"
            yFields={ ['y1'] } yLabel="Traffic" />
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
            xField="x" xLabel="Airlines"
            yFields={ ['y1', 'y2', 'y3', 'y4', 'y5'] } yLabel="Traffic" />
        </div>
      </div>

      <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Grouped Bars</h4>
        </div>
        <div className="chart-panel__content">
          <GroupedBarChart
            colors={ COLORS['qualitative1'] }
            data={ ORDINAL_DATA[2] }
            grouped
            xField="x" xLabel="Airlines"
            yFields={ ['y1', 'y2', 'y3', 'y4', 'y5'] } yLabel="Traffic" />
        </div>
      </div>

      <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Grouped & Stacked Bars</h4>
        </div>
        <div className="chart-panel__content">
        </div>
      </div>

      <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Grouped Bars (Zoom)</h4>
        </div>
        <div className="chart-panel__content">
        </div>
      </div>

    </div>
  </section>

export default BarChartsDemo
