import React from 'react'

import { LineChart } from './charts'
import { ORDINAL_DATA, TIME_SERIES } from 'fakeData'
import { MONOCHROMATIC_COLORS, COLORS } from 'themes/colors'

const LineChartsDemo = props =>
  <section className="demo">
    <header>
      <h3>Using React and VX library</h3>
    </header>

    <div className="charts charts--vx">
      <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Single Line Series</h4>
        </div>
        <div className="chart-panel__content">
          <LineChart
            colors={ COLORS['sequential'] }
            data={ TIME_SERIES['price'] }
            xField="month" xLabel="Months"
            timeFormat="%b %Y"
            yFields={ ['usd'] } yLabel="Price ($)" />
        </div>
      </div>

      <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Single Line Series</h4>
        </div>
        <div className="chart-panel__content">
          <LineChart
            colors={ COLORS['qualitative1'] }
            data={ TIME_SERIES['price'] }
            xField="month" xLabel="Months"
            timeFormat="%b %Y"
            yFields={ ['usd'] } yLabel="Price ($)" />
        </div>
      </div>

      <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Multiple Line Series</h4>
        </div>
        <div className="chart-panel__content">
          <LineChart
            colors={ COLORS['divergent'] }
            data={ TIME_SERIES['traffic'] }
            xField="date" xLabel="Dates"
            timeFormat="%Y-%M-%d"
            yFields={ ['AA', 'BB', 'CC', 'DD'] } yLabel="Traffic" />
        </div>
      </div>

      <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Multiple Line Series</h4>
        </div>
        <div className="chart-panel__content">
          <LineChart
            colors={ COLORS['qualitative2'] }
            data={ TIME_SERIES['traffic'] }
            xField="date" xLabel="Dates"
            timeFormat="%Y-%M-%d"
            yFields={ ['AA', 'BB', 'CC', 'DD'] } yLabel="Traffic" />
        </div>
      </div>

    </div>
  </section>

export default LineChartsDemo
