import React from 'react'

import data from 'market_marimekko.json'
import { MarimekkoChart } from './charts/cartesian'

const MerimekkoChartsDemo = props =>
  <section className="demo">
    <header>
      <h3>Using React and D3 (owns DOM)</h3>
    </header>

    <section className="charts charts--d3">

      <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Single Demo</h4>
        </div>
        <div className="chart-panel__content">
          <MarimekkoChart
            data={ data }
            xField="airport"
            yField="airline" />
        </div>
      </div>

    </section>

  </section>

export default MerimekkoChartsDemo
