import React from 'react'

import { ChartPanel, DemoHeader } from './common'

const SunburstChartsDemo = props =>
  <section className="demo">
    <DemoHeader />

    <div className="charts grid-2">
      <ChartPanel />
      <ChartPanel />
      <ChartPanel />
      <ChartPanel />
    </div>
  </section>

export default SunburstChartsDemo
