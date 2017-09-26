import React from 'react'

import DemoHeader from './DemoHeader'
import ChartPanel from 'common/ChartPanel'

const MarimekkoChartsDemo = props =>
  <section className="demo">
    <DemoHeader />

    <div className="charts charts--victory">
      <ChartPanel />
      <ChartPanel />
    </div>

  </section>

export default MarimekkoChartsDemo
