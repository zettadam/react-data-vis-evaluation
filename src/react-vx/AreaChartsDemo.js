import React, { Component } from 'react'

import { ChartPanel, DemoHeader } from './common'
import { AreaChart } from './charts'
import { TIME_SERIES } from 'fakeData'
import { MONOCHROMATIC_COLORS, COLORS } from 'themes/colors'

export default class AreaChartsDemo extends Component {

  constructor (props) {
    super(props)

    this.state = {
      visibleSection: 'charts'
    }

    this.onToolbarNotesClick = this.onToolbarNotesClick.bind(this)
    this.onToolbarChartsClick = this.onToolbarChartsClick.bind(this)
  }

  onToolbarNotesClick (event) {
    this.setState({ visibleSection: 'notes' })
  }

  onToolbarChartsClick (event) {
    this.setState({ visibleSection: 'charts' })
  }

  render () {
    const { visibleSection } = this.state

    return (
      <section className="demo">
        <DemoHeader handlers={{
          onToolbarNotesClick: this.onToolbarNotesClick,
          onToolbarChartsClick: this.onToolbarChartsClick
        }} />

        { 'charts' === visibleSection &&
        <section className="charts charts--vx">

          <ChartPanel title="Single Area">
            <AreaChart
              colors={ COLORS['sequential'] }
              data={ TIME_SERIES['price'] }
              xField="month" xLabel="Months"
              timeFormat="%b %Y"
              yFields={ ['usd'] } yLabel="Price ($)" />
          </ChartPanel>
          <ChartPanel title="Stacked Areas">
            <AreaChart
              colors={ COLORS['sequential'] }
              data={ TIME_SERIES['traffic'] }
              xField="date" xLabel="Days"
              timeFormat="%Y-%m-%d"
              yFields={ ['AA', 'BB', 'CC', 'DD'] } yLabel="Traffic" />
          </ChartPanel>
          <ChartPanel title="Stacked Area" />

        </section> }

        { 'notes' === visibleSection &&
        <section className="notes">
          <p>Notes will be shown here</p>
        </section> }

      </section>
    )
  }
}
