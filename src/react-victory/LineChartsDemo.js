import React from 'react'

import DemoHeader from './DemoHeader'
import ChartPanel from 'common/ChartPanel'
import { LineChart } from './charts'

import { ORDINAL_DATA, TIME_SERIES } from 'fakeData'
import { MONOCHROMATIC_COLORS, COLORS } from 'themes/colors'

const LineChartsDemo = props =>
  <section className="demo">
    <DemoHeader />

    <div className="charts charts--victory">

      <ChartPanel title="Single Line">
        <LineChart
          data={ ORDINAL_DATA[0] }
          domainPadding={{ x: 0, y: 20 }}
          xField="x"
          yFields={ ['y1'] } />
      </ChartPanel>

      <ChartPanel title="Multiple Lines">
        <LineChart
          data={ ORDINAL_DATA[2] }
          domainPadding={{ x: 0, y: 20 }}
          xField="x"
          yFields={ ['y1', 'y2', 'y3', 'y4', 'y5'] } />
      </ChartPanel>

    </div>
  </section>

export default LineChartsDemo
