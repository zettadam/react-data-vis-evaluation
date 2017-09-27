import React from 'react'

import { ChartPanel, DemoHeader } from './common'
import { BarChart, GroupedBarChart } from './charts'
import { ORDINAL_DATA } from 'fakeData'
import { MONOCHROMATIC_COLORS, COLORS } from 'themes/colors'

const BarChartsDemo = props =>
  <section className="demo">
    <DemoHeader />

    <div className="charts charts--vx">

      <ChartPanel title="Single Bars">
        <BarChart
          colors={ COLORS['qualitative1'] }
          data={ ORDINAL_DATA[2] }
          xField="x" xLabel="Airlines"
          yFields={ ['y1'] } yLabel="Traffic" />
      </ChartPanel>

      <ChartPanel title="Stacked Bars">
        <BarChart
          colors={ COLORS['qualitative2'] }
          data={ ORDINAL_DATA[2] }
          xField="x" xLabel="Airlines"
          yFields={ ['y1', 'y2', 'y3', 'y4', 'y5'] } yLabel="Traffic" />
      </ChartPanel>

      <ChartPanel title="Grouped Bars">
        <GroupedBarChart
          colors={ COLORS['qualitative1'] }
          data={ ORDINAL_DATA[2] }
          grouped
          xField="x" xLabel="Airlines"
          yFields={ ['y1', 'y2', 'y3', 'y4', 'y5'] } yLabel="Traffic" />
      </ChartPanel>

    </div>
  </section>

export default BarChartsDemo
