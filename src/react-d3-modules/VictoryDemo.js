import React from 'react'

import {
  AreaChart,
  BarChart,
  LineChart,
  ScatterChart
} from './charts/victory'

import { ORDINAL_DATA, TIME_SERIES } from 'fakeData'

const VictoryDemo = props =>
  <section className="demo">
    <header>
      <h3>Victory Charts Demo</h3>
    </header>
    <p>Here are some charts created using <b><a href="http://formidable.com/open-source/victory/">victory</a></b> library.</p>

    <section className="charts charts--victory">

      <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Single Area</h4>
        </div>
        <div className="chart-panel__content">
          <AreaChart
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
            data={ ORDINAL_DATA[0] }
            domainPadding={{ x: 0, y: 20 }}
            xField="x"
            yFields={ ['y1'] } />
        </div>
      </div>

      <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Multiple Lines (with zoom)</h4>
        </div>
        <div className="chart-panel__content">
          <LineChart
            data={ ORDINAL_DATA[2] }
            domainPadding={{ x: 0, y: 20 }}
            xField="x"
            yFields={ ['y1', 'y2', 'y3', 'y4', 'y5'] }
            canZoom />
        </div>
      </div>

      <div className="chart-panel">
        <div className="chart-panel__header">
          <h4>Single Bars</h4>
        </div>
        <div className="chart-panel__content">
          <BarChart
            data={ ORDINAL_DATA[0] }
            domainPadding={{ x: 20, y: 0 }}
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
            data={ ORDINAL_DATA[2] }
            domainPadding={{ x: 10, y: 0 }}
            stacked
            theme="qualitativeB"
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
            data={ ORDINAL_DATA[2] }
            domainPadding={{ x: 12, y: 0 }}
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
            data={ ORDINAL_DATA[2] }
            domainPadding={{ x: 10, y: 10 }}
            xField="x"
            yFields={ [ 'y1', 'y2', 'y3', 'y4', 'y5' ] }
            withCursorContainer />
        </div>
      </div>
    </section>
  </section>

export default VictoryDemo
