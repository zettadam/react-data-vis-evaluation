import React from 'react'

import DemoHeader from './DemoHeader'
import ChartPanel from 'common/ChartPanel'

import { ScatterChart } from './charts'
import { ORDINAL_DATA, TIME_SERIES } from 'fakeData'

const ScatterPlotsDemo = props =>
  <section className="demo">
    <DemoHeader />

    <section className="charts charts--victory">

      <ChartPanel title="Scatter Plot" theme="qualitativeA">
        <ScatterChart
          data={ ORDINAL_DATA[2] }
          domainPadding={{ x: 10, y: 10 }}
          xField="x"
          yFields={ [ 'y1', 'y2', 'y3', 'y4', 'y5' ] }
          withCursorContainer />
      </ChartPanel>

      <ChartPanel />

    </section>

  </section>

export default ScatterPlotsDemo
