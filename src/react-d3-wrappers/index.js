import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'

import Introduction from './Introduction'


const Article = props => (
  <article>
    <h1>React (owns the DOM) plus D3</h1>

    <nav>
      <ul>
        <li><NavLink to="/react-d3-wrappers/introduction">Introduction</NavLink></li>
      </ul>
    </nav>

    <Switch>
      <Route path="/react-d3-wrappers/introduction" component={ Introduction } />
      <Route component={ Introduction } />
    </Switch>

  </article>
)

export default Article
