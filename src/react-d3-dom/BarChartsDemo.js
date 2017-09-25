import React from 'react'

import {
  GroupedBars,
  GroupedStackedBars,
  SingleBars,
  StackedBars
 } from './charts/cartesian'

 import { ORDINAL_DATA } from 'fakeData'
 import { MONOCHROMATIC_COLORS, COLORS } from 'themes/colors'

const BarChartsDemo = props =>
  <section className="demo">

    <div className="charts charts--d3">

      <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Single Bars</h4>
        </div>
        <div className="chart-panel__content">
          <div className="chart">
            <SingleBars
              colors={ COLORS['sequential'] }
              data={ ORDINAL_DATA[0] }
              xField="x"
              yField="y1" />
          </div>
        </div>
      </div>

      <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Stacked Bars</h4>
        </div>
        <div className="chart-panel__content">
          <div className="chart">
            <StackedBars
              colors={ COLORS['qualitative2'] }
              data={ ORDINAL_DATA[2] }
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
            <GroupedBars
              colors={ COLORS['qualitative1'] }
              data={ ORDINAL_DATA[2] }
              xField="x"
              yFields={ [ 'y1', 'y2', 'y3', 'y4', 'y5' ] } />
          </div>
        </div>
      </div>

      <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Grouped & Stacked Bars</h4>
        </div>
        <div className="chart-panel__content">
          <div className="chart">
            <GroupedStackedBars />
          </div>
        </div>
      </div>

      <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Grouped Bars (Zoom)</h4>
        </div>
        <div className="chart-panel__content">
          <div className="chart" />
        </div>
      </div>

    </div>
  </section>

export default BarChartsDemo
