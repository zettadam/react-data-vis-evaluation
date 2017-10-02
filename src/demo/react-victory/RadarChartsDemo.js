import React from 'react'

import { DemoHeader, ChartPanel } from './common'

const RadarChartsDemo = props =>
  <section className="demo">
    <DemoHeader />

    <div className="charts charts--victory">
      <ChartPanel />
      <ChartPanel />
    </div>

  </section>

export default RadarChartsDemo
