import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'

import AreaCharts from './AreaCharts'
import BarCharts from './BarCharts'
import LineCharts from './LineCharts'
import PieCharts from './PieCharts'

import './styles/d3charts.css'

const Article = props => (
  <article>
    <header>
      <h1>React plus D3 (owns the DOM)</h1>
      <p>This will display article content.</p>
    </header>

    <nav>
      <ul>
        <li><NavLink to="/react-d3-dom/area-charts">Area Charts</NavLink></li>
        <li><NavLink to="/react-d3-dom/bar-charts">Bar Charts</NavLink></li>
        <li><NavLink to="/react-d3-dom/line-charts">Line Charts</NavLink></li>
        <li><NavLink to="/react-d3-dom/pie-charts">Pie Charts</NavLink></li>
      </ul>
    </nav>

    <Switch>
      <Route path="/react-d3-dom/area-charts" component={ AreaCharts } />
      <Route path="/react-d3-dom/bar-charts" component={ BarCharts } />
      <Route path="/react-d3-dom/line-charts" component={ LineCharts } />
      <Route path="/react-d3-dom/pie-charts" component={ PieCharts } />
    </Switch>

  </article>
)

export default Article
