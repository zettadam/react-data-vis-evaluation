import React from 'react'

import SingleArea from 'react-d3-dom/charts/cartesian/SingleArea'

import { TIME_SERIES } from 'fakeData'

const AreaCharts = props =>
  <div className="d3charts">
    <div className="chart-panel">
      <h4>Single Area</h4>
      <SingleArea
        data={ TIME_SERIES['traffic'] }
        xField="date"
        yField="AA" />
    </div>

    <div className="chart-panel">
      <h4>Stacked Area Chart</h4>
    </div>

  </div>

export default AreaCharts
