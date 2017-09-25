import React from 'react'

import data from 'car-models.json'
import {
  ParallelCoordinatesInteractive
} from './charts/cartesian'

const ParallelCoordinatesPlotsDemo = props =>
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
          <ParallelCoordinatesInteractive
            data={ data } />
        </div>
      </div>

    </section>

  </section>

export default ParallelCoordinatesPlotsDemo
