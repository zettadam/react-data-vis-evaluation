import React from 'react'

import SingleBars from 'react-d3-dom/charts/cartesian/SingleBars'
import StackedBars from 'react-d3-dom/charts/cartesian/StackedBars'
import GroupedBars from 'react-d3-dom/charts/cartesian/GroupedBars'

import { ORDINAL_DATA } from 'fakeData'

const BarCharts = props =>
  <div className="d3charts">
    <div className="chart-panel">
      <h4>Single Bars</h4>
      <SingleBars
        data={ ORDINAL_DATA[0] }
        xField="x"
        yField="y1" />
    </div>

    <div className="chart-panel">
      <h4>Stacked Bars</h4>
      <StackedBars
        data={ ORDINAL_DATA[2] }
        xField="x"
        yFields={ [ 'y1', 'y2', 'y3', 'y4', 'y5' ] } />
    </div>

    <div className="chart-panel">
      <h4>Grouped Bars</h4>
      <GroupedBars
        data={ ORDINAL_DATA[2] }
        xField="x"
        yFields={ [ 'y1', 'y2', 'y3', 'y4', 'y5' ] } />
    </div>

  </div>

export default BarCharts
