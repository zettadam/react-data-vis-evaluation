import React from 'react'

import DemoHeader from './DemoHeader'
import ChartPanel from 'common/ChartPanel'
import { LineChart } from './charts'
import { ORDINAL_DATA, TIME_SERIES } from 'fakeData'
import { MONOCHROMATIC_COLORS, COLORS } from 'themes/colors'

const LineChartsDemo = props =>
  <section className="demo">
    <DemoHeader />

    <div className="charts charts--recharts">

      <ChartPanel title="Single Lines">
        <LineChart
          colors={ COLORS['sequential'] }
          data={ ORDINAL_DATA[0] }
          xField="x"
          yFields={ ['y1'] } />
      </ChartPanel>

      <ChartPanel title="Multiple Lines">
        <LineChart
          colors={ COLORS['divergent'] }
          data={ ORDINAL_DATA[2] }
          xField="x"
          yFields={ ['y1', 'y2', 'y3', 'y4', 'y5'] } />
      </ChartPanel>

    </div>

  </section>

export default LineChartsDemo
