import React, { Component } from 'react'

import { DemoHeader, ChartPanel } from './common'
import { LineChart } from './charts'

import { ORDINAL_DATA, TIME_SERIES } from 'fakeData'

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

          <ChartPanel title="Multiple Lines" theme="divergent" interpolation="step">
            <LineChart
              data={ ORDINAL_DATA[2] }
              domainPadding={{ x: 0, y: 20 }}
              xField="x"
              yFields={ ['y1', 'y2', 'y3', 'y4', 'y5'] } />
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
