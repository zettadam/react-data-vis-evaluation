import React, { Component } from 'react'
import moment from 'moment'

import { ChartPanel, DemoHeader } from './common'
import { LineChart } from './charts'

import DATA from 'price-changes-consumer-goods-services-usa.json'
import { TIME_SERIES, ORDINAL_DATA } from 'fakeData'


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
      <section className="demo demo--semiotic">
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
              data={ TIME_SERIES['traffic'] }
              margin={{ top: 20, right: 20, bottom: 55, left: 55 }}
              matte
              xField="date"
              xTickFormat={ t => moment(t).format('YYYY-MM-DD') }
              xTicks={ 6 }
              yFields={ [ 'AA', 'BB', 'CC', 'DD' ]}
              yTickFormat={ t => t }
              yTicks={ 6 } />

          </ChartPanel>

          <ChartPanel interpolation="linear" theme="schemeAccent" title="Simple Line Chart">

            <LineChart
              data={ TIME_SERIES['price'] }
              margin={{ top: 20, right: 20, bottom: 55, left: 55 }}
              showLinePoints
              timeFormat="%b %Y"
              tooltipContent={ d => (
                <div className="tooltip-content">
                  Month: <b>{ moment(d.x).format('MMM YYYY') }</b><br/>
                  Change: <b>${ d.y }</b>
                </div>
              )}
              xField="month"
              xTickFormat={ t => moment(t).format('MMM YYYY') }
              xTicks={ 6 }
              yFields={ ["usd"] }
              yTickFormat={ t => t }
              yTicks={ 6 } />

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
