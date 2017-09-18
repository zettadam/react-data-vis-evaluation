import React from 'react'

import {
  GroupedBars,
  GroupedStackedBars,
  SingleBars,
  StackedBars
 } from 'react-d3-dom/charts/cartesian'

import { ORDINAL_DATA } from 'fakeData'

const BarChartsDemo = props =>
  <section className="demo">
    <header>
      <h3>Bar Charts</h3>
    </header>

    <div className="charts--d3">

      <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Single Bars</h4>
        </div>
        <div className="chart-panel__content">
          <SingleBars
            data={ ORDINAL_DATA[0] }
            xField="x"
            yField="y1" />
        </div>
      </div>

      <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Stacked Bars</h4>
        </div>
        <div className="chart-panel__content">
          <StackedBars
            data={ ORDINAL_DATA[2] }
            xField="x"
            yFields={ [ 'y1', 'y2', 'y3', 'y4', 'y5' ] } />
        </div>
      </div>

      <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Grouped Bars</h4>
        </div>
        <div className="chart-panel__content">
          <GroupedBars
            data={ ORDINAL_DATA[2] }
            xField="x"
            yFields={ [ 'y1', 'y2', 'y3', 'y4', 'y5' ] } />
        </div>
      </div>

      <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Grouped & Stacked Bars</h4>
        </div>
        <div className="chart-panel__content">
          <GroupedStackedBars />
        </div>
      </div>

      <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Grouped Bars (Zoom)</h4>
        </div>
        <div className="chart-panel__content">
        </div>
      </div>

    </div>
  </section>

export default BarChartsDemo
