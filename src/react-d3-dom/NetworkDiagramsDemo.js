import React from 'react'

import { ChartPanel, DemoHeader } from './common'

const NetworkDiagramsDemo = props =>
  <section className="demo">
    <DemoHeader />

    <div className="charts charts--d3">
      <ChartPanel />
      <ChartPanel />
      <ChartPanel />
      <ChartPanel />
    </div>

  </section>

export default NetworkDiagramsDemo
