import React from 'react'

import DemoHeader from './DemoHeader'
import ChartPanel from 'common/ChartPanel'
import { BarChart } from './charts'

import { ORDINAL_DATA } from 'fakeData'
import { MONOCHROMATIC_COLORS, COLORS } from 'themes/colors'

const BarChartsDemo = props =>
  <section className="demo">
    <DemoHeader />

    <div className="charts charts--victory">

      <ChartPanel title="Simple Bars" theme="qualitativeA">
        <BarChart
          data={ ORDINAL_DATA[0] }
          domainPadding={{ x: 20, y: 0 }}
          xField="x"
          yFields={ ['y1'] } />
      </ChartPanel>

      <ChartPanel title="Stacked Bars" theme="qualitativeB">
        <BarChart
          data={ ORDINAL_DATA[2] }
          domainPadding={{ x: 10, y: 0 }}
          stacked
          xField="x"
          yFields={ [ 'y1', 'y2', 'y3', 'y4', 'y5' ] } />
      </ChartPanel>

      <ChartPanel title="Multiset Bars" theme="sequential">
        <BarChart
          data={ ORDINAL_DATA[2] }
          domainPadding={{ x: 12, y: 0 }}
          grouped
          xField="x"
          yFields={ [ 'y1', 'y2', 'y3', 'y4', 'y5' ] } />
      </ChartPanel>

      <ChartPanel title="Multiset Bars (Horizontal)" theme="divergent">
        <BarChart
          data={ ORDINAL_DATA[2] }
          domainPadding={{ x: 0, y: 12 }}
          grouped
          horizontal
          xField="x"
          yFields={ [ 'y1', 'y2', 'y3', 'y4', 'y5' ] } />
      </ChartPanel>

    </div>
  </section>

export default BarChartsDemo
