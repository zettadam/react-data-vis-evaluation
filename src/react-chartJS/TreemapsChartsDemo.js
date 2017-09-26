import React from 'react'

import DemoHeader from './DemoHeader'
import ChartPanel from 'common/ChartPanel'

const TreemapsChartsDemo = props =>
  <section className="demo">
    <DemoHeader />

    <div className="charts charts--chartjs">
      <ChartPanel />
      <ChartPanel />
    </div>

  </section>

export default TreemapsChartsDemo
