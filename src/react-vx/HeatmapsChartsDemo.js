import React from 'react'

import { ChartPanel, DemoHeader } from './common'

const HeatmapsChartsDemo = props =>
  <section className="demo">
    <DemoHeader />

    <div className="charts charts--vx">
      <ChartPanel />
      <ChartPanel />
    </div>

  </section>

export default HeatmapsChartsDemo
