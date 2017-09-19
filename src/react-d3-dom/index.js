import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'

import Introduction from './Introduction'
import AreaChartsDemo from './AreaChartsDemo'
import BarChartsDemo from './BarChartsDemo'
import LineChartsDemo from './LineChartsDemo'
import PieChartsDemo from './PieChartsDemo'

import './styles/d3charts.css'

const Article = props => (
  <article>
    <header>
      <h1>React plus D3 (owns the DOM)</h1>
    </header>

    <nav>
      <ul>
        <li><NavLink to="/react-d3-dom/introduction">Introduction</NavLink></li>
        <li><NavLink to="/react-d3-dom/bar-charts">Bar Charts</NavLink></li>
        <li><NavLink to="/react-d3-dom/line-charts">Line Charts</NavLink></li>
        <li><NavLink to="/react-d3-dom/area-charts">Area Charts</NavLink></li>
        <li><NavLink to="/react-d3-dom/pie-charts">Pie Charts</NavLink></li>
      </ul>
    </nav>

    <Switch>
      <Route path="/react-d3-dom/introduction" component={ Introduction } />
      <Route path="/react-d3-dom/bar-charts" component={ BarChartsDemo } />
      <Route path="/react-d3-dom/line-charts" component={ LineChartsDemo } />
      <Route path="/react-d3-dom/area-charts" component={ AreaChartsDemo } />
      <Route path="/react-d3-dom/pie-charts" component={ PieChartsDemo } />
      <Route component={ Introduction } />
    </Switch>

  </article>
)

export default Article
