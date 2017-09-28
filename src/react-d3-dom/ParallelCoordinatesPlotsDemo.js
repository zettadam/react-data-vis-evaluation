import React from 'react'

import { ChartPanel, DemoHeader } from './common'
import data from 'car-models.json'
import {
  ParallelCoordinatesInteractive
} from './charts/cartesian'

const ParallelCoordinatesPlotsDemo = props =>
  <section className="demo">
    <DemoHeader />

    <div className="charts charts--d3">
      <ChartPanel />
      <ChartPanel />
      <ChartPanel />
      <ChartPanel />
    </div>

  </section>

export default ParallelCoordinatesPlotsDemo
