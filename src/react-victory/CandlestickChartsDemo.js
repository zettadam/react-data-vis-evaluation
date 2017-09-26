import React from 'react'

import DemoHeader from './DemoHeader'
import ChartPanel from 'common/ChartPanel'
import { CandlestickChart } from './charts'

const DATA = [
  { "date": "9-Jun-14", "open": 62.4, "high": 63.34, "low": 61.79, "close": 62.88, "volume": 37617413 },
  { "date": "6-Jun-14", "open": 63.37, "high": 63.48, "low": 62.15, "close": 62.5, "volume": 42442096 },
  { "date": "5-Jun-14", "open": 63.66, "high": 64.36, "low": 62.82, "close": 63.19, "volume": 47352368 },
  { "date": "4-Jun-14", "open": 62.45, "high": 63.59, "low": 62.07, "close": 63.34, "volume": 36513991 },
  { "date": "3-Jun-14", "open": 62.62, "high": 63.42, "low": 62.32, "close": 62.87, "volume": 32216707 },
  { "date": "2-Jun-14", "open": 63.23, "high": 63.59, "low": 62.05, "close": 63.08, "volume": 35995537 },
  { "date": "30-May-14", "open": 63.95, "high": 64.17, "low": 62.56, "close": 63.3, "volume": 45283577 },
  { "date": "29-May-14", "open": 63.84, "high": 64.3, "low": 63.51, "close": 63.83, "volume": 42699670 },
  { "date": "28-May-14", "open": 63.39, "high": 64.14, "low": 62.62, "close": 63.51, "volume": 47795088 },
  { "date": "27-May-14", "open": 61.62, "high": 63.51, "low": 61.57, "close": 63.48, "volume": 55681663 },
  { "date": "23-May-14", "open": 60.41, "high": 61.45, "low": 60.15, "close": 61.35, "volume": 38293993 },
  { "date": "22-May-14", "open": 60.94, "high": 61.48, "low": 60.4, "close": 60.52, "volume": 54200116 },
  { "date": "21-May-14", "open": 58.56, "high": 60.5, "low": 58.25, "close": 60.49, "volume": 58991505 },
  { "date": "20-May-14", "open": 59.5, "high": 60.19, "low": 58.18, "close": 58.56, "volume": 53931469 },
  { "date": "19-May-14", "open": 57.89, "high": 59.56, "low": 57.57, "close": 59.21, "volume": 43033925 },
  { "date": "16-May-14", "open": 58.31, "high": 58.45, "low": 57.31, "close": 58.02, "volume": 47933075 },
  { "date": "15-May-14", "open": 59.26, "high": 59.38, "low": 57.52, "close": 57.92, "volume": 56813940 },
  { "date": "14-May-14", "open": 59.53, "high": 60.45, "low": 58.95, "close": 59.23, "volume": 47428583 },
  { "date": "13-May-14", "open": 59.66, "high": 60.89, "low": 59.51, "close": 59.83, "volume": 48525476 },
  { "date": "12-May-14", "open": 57.98, "high": 59.9, "low": 57.98, "close": 59.83, "volume": 48575487 },
  { "date": "9-May-14", "open": 56.85, "high": 57.65, "low": 56.38, "close": 57.24, "volume": 52583858 },
  { "date": "8-May-14", "open": 57.23, "high": 58.82, "low": 56.5, "close": 56.76, "volume": 61251053 },
  { "date": "7-May-14", "open": 58.77, "high": 59.3, "low": 56.26, "close": 57.39, "volume": 78587247 },
  { "date": "6-May-14", "open": 60.98, "high": 61.15, "low": 58.49, "close": 58.53, "volume": 55900809 },
  { "date": "5-May-14", "open": 59.67, "high": 61.35, "low": 59.18, "close": 61.22, "volume": 46057411 }
]

const CandlestickChartsDemo = props =>
  <section className="demo">
    <DemoHeader />

    <div className="charts charts--victory">
      <ChartPanel title="Simple Candlestick" theme="qualitativeA">
        <CandlestickChart data={ DATA } />
      </ChartPanel>
      <ChartPanel />
    </div>

  </section>

export default CandlestickChartsDemo
