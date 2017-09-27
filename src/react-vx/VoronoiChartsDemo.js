import React from 'react'

import { ChartPanel, DemoHeader } from './common'

const VoronoiChartsDemo = props =>
  <section className="demo">
    <DemoHeader />

    <div className="charts charts--vx">
      <ChartPanel />
      <ChartPanel />
    </div>

  </section>

export default VoronoiChartsDemo
