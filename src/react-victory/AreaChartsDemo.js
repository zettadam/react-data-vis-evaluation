import React from 'react'

import { AreaChart } from './charts'

import { ORDINAL_DATA } from 'fakeData'
import { MONOCHROMATIC_COLORS, COLORS } from 'themes/colors'

const AreaChartsDemo = props =>
  <section className="demo">
    <header>
      <h3>Using React and Victory library</h3>
    </header>

    <div className="charts charts--victory">

      <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Single Area</h4>
        </div>
        <div className="chart-panel__content">
          <div className="chart">
            <AreaChart
              data={ ORDINAL_DATA[0] }
              xField="x"
              yFields={ ['y1'] } />
          </div>
        </div>
      </div>

      <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Single Area</h4>
        </div>
        <div className="chart-panel__content">
          <div className="chart" />
        </div>
      </div>

      <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Multiple Areas (Stacked)</h4>
        </div>
        <div className="chart-panel__content">
          <div className="chart">
            <AreaChart
              data={ ORDINAL_DATA[2] }
              xField="x"
              yFields={ ['y1', 'y2', 'y3', 'y4', 'y5'] }
              stacked />
          </div>
        </div>
      </div>

      <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Multiple Areas (Grouped)</h4>
        </div>
        <div className="chart-panel__content">
          <div className="chart" />
        </div>
      </div>

    </div>
  </section>

export default AreaChartsDemo
