import React from 'react'

import { ChartPanel, DemoHeader } from './common'
import { AreaChart } from './charts'

import { ORDINAL_DATA, TIME_SERIES } from 'fakeData'
import { MONOCHROMATIC_COLORS, COLORS } from 'themes/colors'

const AreaChartsDemo = props =>
  <section className="demo">
    <DemoHeader />

    <div className="charts charts--recharts">

      <ChartPanel title="Single Area">
        <AreaChart
          colors={ COLORS['sequential'] }
          data={ ORDINAL_DATA[0] }
          xField="x"
          yFields={ ['y1'] } />
      </ChartPanel>

      <ChartPanel title="Stacked Area">
        <AreaChart
          colors={ COLORS['qualitative2'] }
          data={ ORDINAL_DATA[2] }
          xField="x"
          yFields={ ['y1', 'y2', 'y3', 'y4', 'y5'] }
          stacked />
      </ChartPanel>

      <ChartPanel title="Stacked Area">
        <AreaChart
          colors={ COLORS['qualitative2'] }
          data={ ORDINAL_DATA[2] }
          xField="x"
          yFields={ ['y1', 'y2', 'y3', 'y4', 'y5'] }
          stacked
          stackOffset="expand" />
      </ChartPanel>

      <ChartPanel title="Stacked Area">
        <AreaChart
          colors={ COLORS['qualitative2'] }
          data={ ORDINAL_DATA[2] }
          xField="x"
          yFields={ ['y1', 'y2', 'y3', 'y4', 'y5'] }
          stacked
          stackOffset="silhouette" />
      </ChartPanel>

    </div>
  </section>

export default AreaChartsDemo
