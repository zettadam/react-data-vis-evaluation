import React from 'react'

import DemoHeader from './DemoHeader'
import { PieChart } from './charts'
import { ORDINAL_DATA, TIME_SERIES } from 'fakeData'
import { MONOCHROMATIC_COLORS, COLORS } from 'themes/colors'

import ChartPanel from 'common/ChartPanel'

const PieChartsDemo = props =>
  <section className="demo">
    <DemoHeader />

    <div className="charts charts--victory">

      <ChartPanel title="Simple Pie" theme="divergent">
        <PieChart
          data={ [
            { x: 'AAA', y: 5 },
            { x: 'BBB', y: 4 },
            { x: 'CCC', y: 2 },
            { x: 'DDD', y: 3 },
            { x: 'EEE', y: 1 }
          ] } />
      </ChartPanel>

      <ChartPanel title="Simple Doughnut" theme="divergent">
        <PieChart
          data={ [
            { x: 'AAA', y: 5 },
            { x: 'BBB', y: 4 },
            { x: 'CCC', y: 2 },
            { x: 'DDD', y: 3 },
            { x: 'EEE', y: 1 }
          ] }
          innerRadius={ 90 }
          labelRadius={ 108 }
          style={{ labels: { fill: 'rgb(255,255,255)', fontSize: 14, fontWeight: 700 } }} />
      </ChartPanel>
    </div>

  </section>

export default PieChartsDemo
