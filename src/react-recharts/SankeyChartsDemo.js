import React from 'react'
import { Sankey, Tooltip, ResponsiveContainer } from 'recharts'

import { ChartPanel, DemoHeader } from './common'

import data from 'energy.json'

const SankeyChartsDemo = props =>
  <section className="demo">
    <DemoHeader />

    <div className="charts">

      <ChartPanel title="Sankey Chart"
        aspectRatioClass="a4_3">
        <ResponsiveContainer width="100%">
          <Sankey width={ 960 } height={ 600 } data={ data }
            onMouseOver={ e => console.log( e ) }>
            <Tooltip />
          </Sankey>
        </ResponsiveContainer>
      </ChartPanel>

      <ChartPanel title="Sankey Chart"
        aspectRatioClass="a4_3">
        <ResponsiveContainer width="100%">
          <Sankey width={ 960 } height={ 600 } data={ data }>
            <Tooltip />
          </Sankey>
        </ResponsiveContainer>
      </ChartPanel>

    </div>
  </section>

export default SankeyChartsDemo
