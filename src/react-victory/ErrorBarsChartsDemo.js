import React from 'react'

import DemoHeader from './DemoHeader'
import ChartPanel from 'common/ChartPanel'
import { ErrorBarChart } from './charts'

const DATA = [
  { x: 15, y: 35000, error: 0.2 },
  { x: 20, y: 42000, error: 0.05 },
  { x: 25, y: 30000, error: 0.1 },
  { x: 30, y: 35000, error: 0.2 },
  { x: 35, y: 22000, error: 0.15 }
]

const ErrorBarsChartsDemo = props =>
  <section className="demo">
    <DemoHeader />

    <div className="charts charts--victory">
      <ChartPanel title="Simple Error Bars" theme="divergent">
        <ErrorBarChart
          borderWidth={ 5 }
          data={ DATA } />
      </ChartPanel>

      <ChartPanel />
    </div>

  </section>

export default ErrorBarsChartsDemo
