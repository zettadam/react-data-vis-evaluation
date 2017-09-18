import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'

import RechartsDemo from'./RechartsDemo'
import VictoryDemo from './VictoryDemo'
import VXDemo from './VXDemo'

const Article = props => (
  <article>
    <h1>React charts plus selected D3 modules</h1>
    <p>This will display article content.</p>

    <nav>
      <ul>
        <li><NavLink to="/react-d3-modules/recharts">Recharts Demo</NavLink></li>
        <li><NavLink to="/react-d3-modules/victory">Victory Demo</NavLink></li>
        <li><NavLink to="/react-d3-modules/vx">VX Demo</NavLink></li>
      </ul>
    </nav>

    <Switch>
      <Route path="/react-d3-modules/recharts" component={ RechartsDemo } />
      <Route path="/react-d3-modules/victory" component={ VictoryDemo } />
      <Route path="/react-d3-modules/vx" component={ VXDemo } />
    </Switch>
  </article>
)

export default Article
