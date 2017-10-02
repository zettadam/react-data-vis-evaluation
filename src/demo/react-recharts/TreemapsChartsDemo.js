import React from 'react'

import { Treemap, ResponsiveContainer } from 'recharts'

import data from 'world_population.json'
import { ChartPanel, DemoHeader } from './common'

const TreemapsChartsDemo = props =>
  <section className="demo">
    <DemoHeader />

    <div className="charts charts--recharts">
      <ChartPanel title="Simple Treemap">
        <Treemap
          width={ 960 }
          height={ 600 }
          data={ data }
          dataKey="size"
          isUpdateAnimationActive={ false } />
      </ChartPanel>
      <ChartPanel />
    </div>

  </section>

export default TreemapsChartsDemo
