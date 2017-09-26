import React from 'react'

import DemoHeader from './DemoHeader'
import ChartPanel from 'common/ChartPanel'
import { AreaChart } from './charts'

import { ORDINAL_DATA } from 'fakeData'
import { MONOCHROMATIC_COLORS, COLORS } from 'themes/colors'

const AreaChartsDemo = props =>
  <section className="demo">
    <DemoHeader />

    <div className="charts charts--victory a4_3">

      <ChartPanel title="Single Area" theme="divergent">
        <AreaChart
          data={ ORDINAL_DATA[0] }
          xField="x"
          yFields={ ['y1'] } />
      </ChartPanel>

      <ChartPanel />

      <ChartPanel title="Multiple Areas (Stacked)" theme="qualitativeB">
        <AreaChart
          data={ ORDINAL_DATA[2] }
          xField="x"
          yFields={ ['y1', 'y2', 'y3', 'y4', 'y5'] }
          stacked />
      </ChartPanel>

      <ChartPanel title="Multiple Areas (Grouped)" />

    </div>
  </section>

export default AreaChartsDemo
