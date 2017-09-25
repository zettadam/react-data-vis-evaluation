import React from 'react'

import { BarChart } from './charts'
import { ORDINAL_DATA, TIME_SERIES } from 'fakeData'
import { MONOCHROMATIC_COLORS, COLORS } from 'themes/colors'

const BarChartsDemo = props =>
  <section className="demo">

    <section className="charts charts--chartjs">

      <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Single Bars</h4>
        </div>
        <div className="chart-panel__content">
          <div className="chart">
            <BarChart
              colors={ COLORS['qualitative1'] }
              data={ ORDINAL_DATA[0] }
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
              colors={ COLORS['qualitative2'] }
              data={ ORDINAL_DATA[2] }
              stacked
              xField="x"
              yFields={ [ 'y1', 'y2', 'y3', 'y4', 'y5' ] } />
          </div>
        </div>
      </div>

      <div className="chart-panel chart-panel--fullwidth">
        <div className="chart-panel__header">
          <h4>Grouped Bars</h4>
        </div>
        <div className="chart-panel__content">
          <div className="chart">
            <BarChart
              colors={ COLORS['qualitative1'] }
              data={ ORDINAL_DATA[2] }
              grouped
              xField="x"
              yFields={ [ 'y1', 'y2', 'y3', 'y4', 'y5' ] } />
          </div>
        </div>
      </div>

    </section>

  </section>

export default BarChartsDemo
