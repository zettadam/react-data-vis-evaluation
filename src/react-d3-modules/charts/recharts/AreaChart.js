import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'

export default class Chart extends Component {

  static defaultProps = {
    colors: [],
    data: [],
    stacked: false
  }

  render () {

    const {
      colors,
      data,
      stacked,
      xField,
      yFields
    } = this.props

    return (
      <ResponsiveContainer>
        <AreaChart data={ data }
          stackOffset="silhouette">
          <XAxis dataKey={ xField } tickLine={ false }/>
          <YAxis tickLine={ false } />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="0.5 0.5" />
          { yFields && yFields.map((f, i) => {
            let rgb = colors[i % colors.length]
            if (stacked) {
              return (
                <Area key={ f } stackId="0"
                  dataKey={ f }
                  stroke={ rgb }
                  fill={ rgb } />
              )
            }
            return (
              <Area key={ f } dataKey={ f }
                stroke={ rgb }
                fill={ rgb } />
            )
          } )}
        </AreaChart>
      </ResponsiveContainer>
    )
  }
}
