import React from 'react'

import { DemoHeader, ChartPanel } from './common'
import { ORDINAL_DATA } from 'fakeData'
import { NightingaleRoseChart } from './charts'

const DATA = [
  { x: 'AA', y1: 213, y2: 130, y3: 70 },
  { x: 'AA', y1: 113, y2: 141, y3: 130 },
  { x: 'AA', y1: 117, y2: 80, y3: 134 },
  { x: 'AA', y1: 69, y2: 240, y3: 210 },
  { x: 'AA', y1: 32, y2: 190, y3: 190 },
  { x: 'AA', y1: 100, y2: 170, y3: 70 }
]

const NightingaleRoseChartsDemo = props =>
  <section className="demo">
    <DemoHeader />

    <div className="charts charts--victory">
      <ChartPanel title="Simple Nightingale Rose" theme="qualitativeA">
        <NightingaleRoseChart
          data={ ORDINAL_DATA[1] }
          xField="x"
          yFields={ ['y1', 'y2'] } />
      </ChartPanel>
      <ChartPanel title="Simple Nightingale Rose" theme="qualitativeB">
        <NightingaleRoseChart
          data={ ORDINAL_DATA[2] }
          xField="x"
          yFields={ ['y1', 'y2', 'y3', 'y4', 'y5'] } />
      </ChartPanel>
    </div>

  </section>

export default NightingaleRoseChartsDemo
