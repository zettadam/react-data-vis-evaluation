import React from 'react'
import BarChart from './BarChart'

const DATA = [
  { airlineCode: 'AA', traffic: 12300 },
  { airlineCode: 'BB', traffic: 7500 },
  { airlineCode: 'CC', traffic: 15345 },
  { airlineCode: 'DD', traffic: 11100 },
  { airlineCode: 'EE', traffic: 9800 },
  { airlineCode: 'FF', traffic: 750 },
  { airlineCode: 'GG', traffic: 16030 },
  { airlineCode: 'HH', traffic: 12345 },
  { airlineCode: 'II', traffic: 7834 },
  { airlineCode: 'JJ', traffic: 4560 },
  { airlineCode: 'KK', traffic: 2300 },
  { airlineCode: 'LL', traffic: 11980 },
  { airlineCode: 'MM', traffic: 13765 },
  { airlineCode: 'NN', traffic: 8903 },
  { airlineCode: 'OO', traffic: 9367 }
]

const Article = props => (
  <article>
    <h1>React charts plus selected D3 modules</h1>
    <p>This will display article content.</p>
    <BarChart data={ DATA } />
  </article>
)

export default Article
