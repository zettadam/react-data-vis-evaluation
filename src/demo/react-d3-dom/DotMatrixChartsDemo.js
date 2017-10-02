import React from 'react'

import { ChartPanel, DemoHeader } from './common'

const DotMatrixChartsDemo = props =>
  <section className="demo">
    <DemoHeader />

    <div className="charts charts--d3">
      <ChartPanel />
      <ChartPanel />
      <ChartPanel />
      <ChartPanel />
    </div>

  </section>

export default DotMatrixChartsDemo
