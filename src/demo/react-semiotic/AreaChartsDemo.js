import React, { Component } from 'react'

import { ChartPanel, DemoHeader } from './common'
import { AreaChart } from './charts'

import { COLORS } from 'themes/colors'

const DATA = [
  { "x": "AA", "y1": 12300 },
  { "x": "BB", "y1": 7500 },
  { "x": "CC", "y1": 15345 },
  { "x": "DD", "y1": 11100 },
  { "x": "EE", "y1": 9800 },
  { "x": "FF", "y1": 750 },
  { "x": "GG", "y1": 16030 },
  { "x": "HH", "y1": 12345 },
  { "x": "II", "y1": 7834 },
  { "x": "JJ", "y1": 4560 },
  { "x": "KK", "y1": 2300 },
  { "x": "LL", "y1": 11980 },
  { "x": "MM", "y1": 13765 },
  { "x": "NN", "y1": 8903 },
  { "x": "OO", "y1": 9367 }
]

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
          <ChartPanel theme="sequential" title="Single Area">
            <AreaChart data={ DATA } xAccessor="x" yAccessor="y1" />
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
