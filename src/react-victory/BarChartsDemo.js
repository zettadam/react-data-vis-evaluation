import React from 'react'

import { BarChart } from './charts'

import { ORDINAL_DATA } from 'fakeData'
import { MONOCHROMATIC_COLORS, COLORS } from 'themes/colors'

const BarChartsDemo = props =>
  <section className="demo">
    <header>
      <h3>Using React and Victory library</h3>
    </header>

    <div className="charts charts--victory">

      <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Single Bars</h4>
        </div>
        <div className="chart-panel__content">
          <div className="chart">
            <BarChart
              data={ ORDINAL_DATA[0] }
              domainPadding={{ x: 20, y: 0 }}
              xField="x"
              yFields={ ['y1'] } />
          </div>
        </div>
      </div>

      <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Stacked Bars</h4>
        </div>
        <div className="chart-panel__content">
          <div className="chart">
            <BarChart
              data={ ORDINAL_DATA[2] }
              domainPadding={{ x: 10, y: 0 }}
              stacked
              theme="qualitativeB"
              xField="x"
              yFields={ [ 'y1', 'y2', 'y3', 'y4', 'y5' ] } />
          </div>
        </div>
      </div>

      <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Grouped Bars</h4>
        </div>
        <div className="chart-panel__content">
          <div className="chart">
            <BarChart
              data={ ORDINAL_DATA[2] }
              domainPadding={{ x: 12, y: 0 }}
              grouped
              xField="x"
              yFields={ [ 'y1', 'y2', 'y3', 'y4', 'y5' ] } />
          </div>
        </div>
      </div>

    </div>
  </section>

export default BarChartsDemo
