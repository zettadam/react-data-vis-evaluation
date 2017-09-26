import React from 'react'

import DemoHeader from './DemoHeader'
import ChartPanel from 'common/ChartPanel'

const SegmentedChartsDemo = props =>
  <section className="demo">
    <DemoHeader />

    <div className="charts charts--vx">
      <ChartPanel />
      <ChartPanel />
    </div>

  </section>

export default SegmentedChartsDemo
