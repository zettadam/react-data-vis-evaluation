import React, { Component } from 'react'
import { Sankey, Tooltip, ResponsiveContainer } from 'recharts'

import { ChartPanel, DemoHeader } from './common'

import data from 'energy.json'

export default class SankeyChartsDemo extends Component {

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

    return (
      <section className="demo">
        <DemoHeader handlers={{
          onToolbarBookmarkClick: this.onToolbarBookmarkClick,
          onToolbarNotesClick: this.onToolbarNotesClick,
          onToolbarChartsClick: this.onToolbarChartsClick
        }}
        section={ section } />

        <div className="charts">

          <ChartPanel title="Sankey Chart"
            aspectRatioClass="a4_3">
            <ResponsiveContainer width="100%">
              <Sankey width={ 960 } height={ 600 } data={ data }
                onMouseOver={ e => console.log( e ) }>
                <Tooltip />
              </Sankey>
            </ResponsiveContainer>
          </ChartPanel>

          <ChartPanel title="Sankey Chart"
            aspectRatioClass="a4_3">
            <ResponsiveContainer width="100%">
              <Sankey width={ 960 } height={ 600 } data={ data }>
                <Tooltip />
              </Sankey>
            </ResponsiveContainer>
          </ChartPanel>

        </div>
      </section>
    )
  }
}
