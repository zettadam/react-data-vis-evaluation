import React from 'react'
import { random, range, merge } from 'lodash'

import { DemoHeader, ChartPanel } from './common'
import { CandlestickChart } from './charts'

import { getCandlestickData } from 'fakeData'

const DATA = getCandlestickData(50)

const CandlestickChartsDemo = props =>
  <section className="demo">
    <DemoHeader />

    <div className="charts charts--victory">
      <ChartPanel title="Simple Candlestick" theme="qualitativeA">
        <CandlestickChart data={ DATA } />
      </ChartPanel>
      <ChartPanel title="Simple Candlestick (custom click events)" theme="qualitativeA">
        <CandlestickChart data={ DATA }
          events={[
            { target: "labels",
              eventHandlers: {
                onClick: () => ([ {
                  mutation: props => ({ style: merge({}, props.style.labels, { fill: "orange" })})
                }])
              }
            },
            { target: "data",
              eventHandlers: {
                onClick: () => ([ {
                  mutation: props => ({ style: merge({}, props.style, { fill: "blue" }) })
                } ])
              }
            }]} />
      </ChartPanel>

      <ChartPanel title="Simple Candlestick (custom candle colors)" theme="qualitativeA">
        <CandlestickChart data={ DATA }
          candleColors={{ positive: 'rgb(0,0,0)', negative: 'rgb(255,0,0)' }} />
      </ChartPanel>

    </div>

  </section>

export default CandlestickChartsDemo
