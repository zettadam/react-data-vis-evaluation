import React, { Component } from 'react'

import { ChartPanel, DemoHeader } from './common'
import { BarChart, GroupedBarChart } from './charts'
import { ORDINAL_DATA } from 'fakeData'
import { MONOCHROMATIC_COLORS, COLORS } from 'themes/colors'

export default class BarChartsDemo extends Component {

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
        <DemoHeader
        handlers={{
          onToolbarNotesClick: this.onToolbarNotesClick,
          onToolbarChartsClick: this.onToolbarChartsClick
        }}
        visibleSection={ visibleSection } />

        { 'charts' === visibleSection &&
        <section className="charts charts--vx">

          <ChartPanel title="Single Bars">
            <BarChart
              colors={ COLORS['qualitative1'] }
              data={ ORDINAL_DATA[2] }
              xField="x" xLabel="Airlines"
              yFields={ ['y1'] } yLabel="Traffic" />
          </ChartPanel>

          <ChartPanel title="Stacked Bars">
            <BarChart
              colors={ COLORS['qualitative2'] }
              data={ ORDINAL_DATA[2] }
              xField="x" xLabel="Airlines"
              yFields={ ['y1', 'y2', 'y3', 'y4', 'y5'] } yLabel="Traffic" />
          </ChartPanel>

          <ChartPanel title="Grouped Bars">
            <GroupedBarChart
              colors={ COLORS['qualitative1'] }
              data={ ORDINAL_DATA[2] }
              grouped
              xField="x" xLabel="Airlines"
              yFields={ ['y1', 'y2', 'y3', 'y4', 'y5'] } yLabel="Traffic" />
          </ChartPanel>

        </section> }

        { 'notes' === visibleSection &&
        <section className="notes">
          <p>Notes will be shown here</p>
        </section> }

      </section>
    )
  }
}
