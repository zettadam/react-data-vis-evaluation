import React, { Component } from 'react'

import { ChartPanel, DemoHeader } from './common'
import { LineChart } from './charts'

import DATA from 'price-changes-consumer-goods-services-usa.json'


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
        <section className="charts grid-2">

          <ChartPanel interpolation="monotoneX" theme="schemeAccent" title="Simple Line Chart">
            <LineChart
              data={ DATA }
              legend
              margin={{ top: 20, right: 20, bottom: 55, left: 55 }}
              matte
              xAccessor="year"
              xTickFormat="0"
              yAccessor="value"
              yTickFormat="0" />
          </ChartPanel>

          <ChartPanel interpolation="linear" theme="schemeAccent" title="Simple Line Chart">
            <LineChart
              data={ DATA }
              margin={{ top: 20, right: 20, bottom: 55, left: 55 }}
              showLinePoints
              tooltipContent={ d => (
                <div className="tooltip-content">
                  Year: <b>{ d.year }</b><br/>
                  Change: <b>{ d.value }%</b>
                </div>
              )}
              xAccessor="year"
              xTickFormat="0"
              yAccessor="value"
              yTickFormat="0" />
          </ChartPanel>
        </section> }

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
