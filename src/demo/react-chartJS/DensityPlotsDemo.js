import React from 'react'

import DemoHeader from './DemoHeader'
import ChartPanel from 'common/ChartPanel'

const DensityPlotsDemo = props =>
  <section className="demo">
    <DemoHeader />

    <div className="charts grid-2">
      <ChartPanel />
      <ChartPanel />
    </div>

  </section>

export default DensityPlotsDemo
