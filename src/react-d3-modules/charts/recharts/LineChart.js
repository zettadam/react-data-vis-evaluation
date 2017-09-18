import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  Line,
  LineChart,
  CartesianGrid,
  Legend,
  Tooltip,
  ResponsiveContainer,
  XAxis,
  YAxis
} from 'recharts'


export default class Chart extends Component {

  static defaultProps = {
    colors: [],
    data: []
  }

  render () {

    const {
      colors,
      data,
      xField,
      yFields
    } = this.props

    return (
      <ResponsiveContainer>
        <LineChart data={ data }>
          <XAxis dataKey={ xField } tickLine={ false } />
          <YAxis tickLine={ false } />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="0.5 0.5" vertical={ false } />
          { yFields && yFields.map((f, i) => {
            let rgb = colors[i % colors.length]
            return (
              <Line key={ f } dataKey={ f }
                stroke={ rgb } />
            )
          } )}
        </LineChart>
      </ResponsiveContainer>
    )
  }
}

