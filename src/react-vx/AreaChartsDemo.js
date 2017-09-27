import React from 'react'

import { ChartPanel, DemoHeader } from './common'
import { AreaChart } from './charts'
import { TIME_SERIES } from 'fakeData'
import { MONOCHROMATIC_COLORS, COLORS } from 'themes/colors'

const AreaChartsDemo = props =>
  <section className="demo">
    <DemoHeader />

    <div className="charts charts--vx">

      <ChartPanel title="Single Area">
        <AreaChart
          colors={ COLORS['sequential'] }
          data={ TIME_SERIES['price'] }
          xField="month" xLabel="Months"
          timeFormat="%b %Y"
          yFields={ ['usd'] } yLabel="Price ($)" />
      </ChartPanel>
      <ChartPanel title="Stacked Areas">
        <AreaChart
          colors={ COLORS['sequential'] }
          data={ TIME_SERIES['traffic'] }
          xField="date" xLabel="Days"
          timeFormat="%Y-%m-%d"
          yFields={ ['AA', 'BB', 'CC', 'DD'] } yLabel="Traffic" />
      </ChartPanel>
      <ChartPanel title="Stacked Area" />

    </div>
  </section>

export default AreaChartsDemo
