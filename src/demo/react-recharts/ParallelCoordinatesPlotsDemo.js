import React from 'react'

import { ChartPanel, DemoHeader } from './common'

const ParallelCoordinatesPlotsDemo = props =>
  <section className="demo">
    <DemoHeader />

    <div className="charts charts--recharts">
      <ChartPanel />
      <ChartPanel />
    </div>

  </section>

export default ParallelCoordinatesPlotsDemo