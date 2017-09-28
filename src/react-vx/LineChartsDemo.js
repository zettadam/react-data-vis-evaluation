import React, { Component } from 'react'

import { ChartPanel, DemoHeader } from './common'
import { LineChart } from './charts'
import { ORDINAL_DATA, TIME_SERIES } from 'fakeData'
import { MONOCHROMATIC_COLORS, COLORS } from 'themes/colors'

export default class LineChartsDemo extends Component {

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

    const {
      visibleSection
    } = this.state

    return (
      <section className="demo">
        <DemoHeader handlers={{
          onToolbarNotesClick: this.onToolbarNotesClick,
          onToolbarChartsClick: this.onToolbarChartsClick
        }} />

        { 'charts' === visibleSection &&
        <div className="charts charts--vx">

          <ChartPanel title="Single Lines">
            <LineChart
              colors={ COLORS['sequential'] }
              data={ TIME_SERIES['price'] }
              xField="month" xLabel="Months"
              timeFormat="%b %Y"
              yFields={ ['usd'] } yLabel="Price ($)" />
          </ChartPanel>

          <ChartPanel title="Single Lines">
            <LineChart
              colors={ COLORS['qualitative1'] }
              data={ TIME_SERIES['price'] }
              xField="month" xLabel="Months"
              timeFormat="%b %Y"
              yFields={ ['usd'] } yLabel="Price ($)" />
          </ChartPanel>

          <ChartPanel title="Multiple Lines">
            <LineChart
              colors={ COLORS['divergent'] }
              data={ TIME_SERIES['traffic'] }
              xField="date" xLabel="Dates"
              timeFormat="%Y-%M-%d"
              yFields={ ['AA', 'BB', 'CC', 'DD'] } yLabel="Traffic" />
          </ChartPanel>

          <ChartPanel title="Multiple Lines">
            <LineChart
              colors={ COLORS['qualitative2'] }
              data={ TIME_SERIES['traffic'] }
              xField="date" xLabel="Dates"
              timeFormat="%Y-%M-%d"
              yFields={ ['AA', 'BB', 'CC', 'DD'] } yLabel="Traffic" />
          </ChartPanel>

        </div> }

        { 'notes' === visibleSection &&
        <div className="notes">
          <p>Notes will be shown here</p>
        </div> }
      </section>
    )
  }
}
