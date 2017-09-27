import React from 'react'

import { DemoHeader, ChartPanel } from './common'
import { LineChart } from './charts'

import { ORDINAL_DATA, TIME_SERIES } from 'fakeData'

const LineChartsDemo = props =>
  <section className="demo">
    <DemoHeader />

    <div className="charts charts--victory">

      <ChartPanel title="Single Line" theme="sequential">
        <LineChart
          data={ ORDINAL_DATA[0] }
          domainPadding={{ x: 0, y: 20 }}
          xField="x"
          yFields={ ['y1'] } />
      </ChartPanel>

      <ChartPanel title="Multiple Lines" theme="divergent" interpolation="step">
        <LineChart
          data={ ORDINAL_DATA[2] }
          domainPadding={{ x: 0, y: 20 }}
          xField="x"
          yFields={ ['y1', 'y2', 'y3', 'y4', 'y5'] } />
      </ChartPanel>

    </div>
  </section>

export default LineChartsDemo
