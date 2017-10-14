import React, { Component } from 'react'

import { DemoHeader, ChartPanel } from './common'
import { BarChart } from './charts'

import { ORDINAL_DATA } from 'fakeData'
import { MONOCHROMATIC_COLORS, COLORS } from 'themes/colors'

export default class BarChartsDemo extends Component {

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

          <ChartPanel title="Simple Bars" theme="qualitativeA">
            <BarChart
              data={ ORDINAL_DATA[0] }
              domainPadding={{ x: 20, y: 0 }}
              xField="x"
              yFields={ ['y1'] } />
          </ChartPanel>

          <ChartPanel title="Stacked Bars" theme="qualitativeB">
            <BarChart
              data={ ORDINAL_DATA[2] }
              domainPadding={{ x: 10, y: 0 }}
              stacked
              xField="x"
              yFields={ [ 'y1', 'y2', 'y3', 'y4', 'y5' ] } />
          </ChartPanel>

          <ChartPanel title="Multiset Bars" theme="sequential">
            <BarChart
              data={ ORDINAL_DATA[2] }
              domainPadding={{ x: 12, y: 0 }}
              grouped
              xField="x"
              yFields={ [ 'y1', 'y2', 'y3', 'y4', 'y5' ] } />
          </ChartPanel>

          <ChartPanel title="Multiset Bars (Horizontal)" theme="divergent">
            <BarChart
              data={ ORDINAL_DATA[2] }
              domainPadding={{ x: 0, y: 12 }}
              grouped
              horizontal
              xField="x"
              yFields={ [ 'y1', 'y2', 'y3', 'y4', 'y5' ] } />
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
