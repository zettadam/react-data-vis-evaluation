import React from 'react'

import { ChartPanel, DemoHeader } from './common'

const MarimekkoChartsDemo = props =>
  <section className="demo">
    <DemoHeader />

    <div className="charts charts--vx">
      <ChartPanel />
      <ChartPanel />
    </div>

  </section>

export default MarimekkoChartsDemo
