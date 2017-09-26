import React from 'react'

import DemoHeader from './DemoHeader'
import ChartPanel from 'common/ChartPanel'

import { TIME_SERIES } from 'fakeData'
import { MONOCHROMATIC_COLORS, COLORS } from 'themes/colors'

const AreaChartsDemo = props =>
  <section className="demo">
    <DemoHeader />

    <div className="charts charts--vx">

      <ChartPanel title="Single Area" />
      <ChartPanel title="Single Area" />
      <ChartPanel title="Stacked Area" />

    </div>
  </section>

export default AreaChartsDemo
