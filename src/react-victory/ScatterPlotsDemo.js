import React from 'react'

import { ScatterChart } from './charts'
import { ORDINAL_DATA, TIME_SERIES } from 'fakeData'

const ScatterPlotsDemo = props =>
  <section className="demo">
    <header>
      <h3>Using React and Victory library</h3>
    </header>

    <section className="charts charts--victory">

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

export default ScatterPlotsDemo
