import React from 'react'

import {
  AreaChart,
  BarChart,
  LineChart,
  ScatterChart
} from './charts/victory'

import {
  ORDINAL_DATA,
  TIME_SERIES
} from 'fakeData'

import {
  MONOCHROMATIC_COLORS,
  COLORS
} from './colors'

const VictoryDemo = props =>
  <section className="demo">
    <header>
      <h3>Victory Demo</h3>
    </header>
    <p>Here are some charts created using <b><a href="http://formidable.com/open-source/victory/">victory</a></b> library.</p>

    <section className="charts--victory">

      <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Single Area</h4>
        </div>
        <div className="chart-panel__content">
          <AreaChart
            colors={ COLORS['sequential'] }
            data={ ORDINAL_DATA[0] }
            xField="x"
            yFields={ ['y1'] } />
        </div>
      </div>

      <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Stacked Area</h4>
        </div>
        <div className="chart-panel__content">
          <AreaChart
            colors={ COLORS['qualitative2'] }
            data={ ORDINAL_DATA[2] }
            xField="x"
            yFields={ ['y1', 'y2', 'y3', 'y4', 'y5'] }
            stacked />
        </div>
      </div>

      <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Single Lines</h4>
        </div>
        <div className="chart-panel__content">
          <LineChart
            colors={ COLORS['sequential'] }
            data={ ORDINAL_DATA[0] }
            xField="x"
            yFields={ ['y1'] } />
        </div>
      </div>

      <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Multiple Lines</h4>
        </div>
        <div className="chart-panel__content">
          <LineChart
            colors={ COLORS['qualitative1'] }
            data={ ORDINAL_DATA[2] }
            xField="x"
            yFields={ ['y1', 'y2', 'y3', 'y4', 'y5'] } />
        </div>
      </div>

      <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Single Bars</h4>
        </div>
        <div className="chart-panel__content">
          <BarChart
            colors={ COLORS['sequential'] }
            data={ ORDINAL_DATA[0] }
            xField="x"
            yFields={ ['y1'] } />
        </div>
      </div>

      <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Stacked Bars</h4>
        </div>
        <div className="chart-panel__content">
          <BarChart
            colors={ COLORS['divergent'] }
            data={ ORDINAL_DATA[2] }
            stacked
            xField="x"
            yFields={ [ 'y1', 'y2', 'y3', 'y4', 'y5' ] } />
        </div>
      </div>

      <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Grouped Bars</h4>
        </div>
        <div className="chart-panel__content">
          <BarChart
            colors={ COLORS['qualitative2'] }
            data={ ORDINAL_DATA[2] }
            grouped
            xField="x"
            yFields={ [ 'y1', 'y2', 'y3', 'y4', 'y5' ] } />
        </div>
      </div>

      <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Scatter Plot</h4>
        </div>
        <div className="chart-panel__content">
          <ScatterChart
            colors={ COLORS['qualitative1'] }
            data={ ORDINAL_DATA[2] }
            xField="x"
            yFields={ [ 'y1', 'y2', 'y3', 'y4', 'y5' ] } />
        </div>
      </div>
    </section>
  </section>

export default VictoryDemo
