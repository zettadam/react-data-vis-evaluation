import React from 'react'

import { ChartPanel, DemoHeader } from './common'

const SegmentedChartsDemo = props =>
  <section className="demo">
    <DemoHeader />

    <div className="charts charts--vx">
      <ChartPanel />
      <ChartPanel />
    </div>

  </section>

export default SegmentedChartsDemo
