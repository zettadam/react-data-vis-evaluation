import React, { Component } from 'react'
import moment from 'moment'

import { DemoHeader, ChartPanel } from './common'
import { LineChart } from './charts'

import { ORDINAL_DATA, TIME_SERIES } from 'fakeData'
import DATA from 'house-price-index-usa.json'

export default class LineChartsDemo extends Component {

  constructor (props) {
    super(props)

    this.state = {
      section: 'charts'
    }

    this.onToolbarBookmarkClick = this.onToolbarBookmarkClick.bind(this)
    this.onToolbarNotesClick = this.onToolbarNotesClick.bind(this)
    this.onToolbarChartsClick = this.onToolbarChartsClick.bind(this)
  }

  onToolbarBookmarkClick (event) {
    this.setState({ section: 'bookmarks' })
  }

  onToolbarNotesClick (event) {
    this.setState({ section: 'notes' })
  }

  onToolbarChartsClick (event) {
    this.setState({ section: 'charts' })
  }

  render () {
    const { section } = this.state

    return (
      <section className="demo">
        <DemoHeader handlers={{
          onToolbarBookmarkClick: this.onToolbarBookmarkClick,
          onToolbarNotesClick: this.onToolbarNotesClick,
          onToolbarChartsClick: this.onToolbarChartsClick
        }}
        section={ section } />

        { 'charts' === section &&
        <div className="charts charts--victory">

          <ChartPanel title="Single Line" theme="sequential">
            <LineChart
              data={ ORDINAL_DATA[0] }
              domainPadding={{ x: 0, y: 20 }}
              xField="x"
              yFields={ ['y1'] } />
          </ChartPanel>

          <ChartPanel title="Multiple Lines" theme="divergent" interpolation="natural">
            <LineChart
              data={ ORDINAL_DATA[2] }
              domainPadding={{ x: 0, y: 20 }}
              xField="x"
              yFields={ ['y1', 'y2', 'y3', 'y4', 'y5'] } />
          </ChartPanel>

          <ChartPanel title="US House Price Index (with zoom)" theme="qualitativeB" interpolation="natural">
            <LineChart
              data={ DATA }
              domainPadding={{ x: 0, y: 20 }}
              xField="Date"
              yFields={ ['Boston', 'Miami', 'Portland', 'National'] }
              xAxisProps={{
                scale: 'time',
                label: 'Months',
                style: { axisLabel: { fontSize: 12 } },
                tickFormat: t => moment(t).format('MMM YYYY'),
                tickValues: [ '1987-01-01', '1992-01-01', '1997-01-01', '2002-01-01', '2007-01-01', '2012-01-01', '2015-12-01' ]
              }}
              yAxisProps={{
                dependentAxis: true,
                label: 'Price Index',
                scale: 'linear',
                style: { axisLabel: { fontSize: 12, padding: 40 } }
              }}
              zoomContainerProps={{
                zoomDimension: 'x'
              }} />
          </ChartPanel>

          <ChartPanel title="US House Price Index (with pan)" theme="qualitativeB" interpolation="natural">
            <LineChart
              data={ DATA }
              domainPadding={{ x: 0, y: 20 }}
              legendOptions={{
                orientation: 'horizontal',
                centerTitle: true,
                gutter: 10,
                height: 10,
                padding: { top: 10, bottom: 10 },
                style: { border: { stroke: 'rgb(0,0,0)', strokeWidth: 0.5 }, borderPadding: 0 },
                width: 600,
                x: 0, y: 0
              }}
              xField="Date"
              yFields={ ['Boston', 'Miami', 'Portland', 'National'] }
              xAxisProps={{
                scale: 'time',
                label: 'Months',
                style: { axisLabel: { fontSize: 12 } },
                tickFormat: t => t.includes('01-01') ? moment(t).format('YYYY') : moment(t).format('MMM')
              }}
              yAxisProps={{
                dependentAxis: true,
                label: 'Price Index',
                scale: 'linear',
                style: { axisLabel: { fontSize: 12, padding: 40 } }
              }}
              zoomContainerProps={{
                allowZoom: false,
                zoomDimension: 'x',
                zoomDomain: {
                  x: [0, 12]
                }
              }} />
          </ChartPanel>

        </div> }

        { 'bookmarks' === section &&
        <section className="bookmarks">

        </section> }

        { 'notes' === section &&
        <section className="notes">
          <p>Notes will be shown here</p>
        </section> }

      </section>
    )
  }
}
