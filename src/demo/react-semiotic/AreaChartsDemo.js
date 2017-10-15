import React, { Component } from 'react'

import { ChartPanel, DemoHeader } from './common'
import { AreaChart } from './charts'

import { COLORS } from 'themes/colors'
import DATA from 'price-changes-consumer-goods-services-usa.json'

export default class AreaChartsDemo extends Component {

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
        <section className="charts charts--semiotic">
          <ChartPanel theme="schemeAccent" title="Simple Area Chart">
            <AreaChart
              data={ DATA }
              margin={{ top: 0, right: 10, bottom: 40, left: 80 }}
              xAccessor="year"
              xTickFormat="0"
              yAccessor="value"
              yTickFormat="0" />
          </ChartPanel>
          <ChartPanel />
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
