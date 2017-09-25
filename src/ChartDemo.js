import React from 'react'
import { NavLink, Route, Switch, withRouter } from 'react-router-dom'

import CHART_TYPE_MATRIX from 'chart-matrix.json'
import ChartDemoSwitch from './ChartDemoSwitch'

const ChartDemo = ({
  match
}) => {
  const { type } = match.params
  return (
    <section className="demo-catalog">
      <article>
        <h2>{ CHART_TYPE_MATRIX[type] && CHART_TYPE_MATRIX[type]['title'] }</h2>

        <Switch>
          <Route path="/chart-types/:type/:approach" component={ ChartDemoSwitch } />
        </Switch>
      </article>

      <aside>
        <h4>Description</h4>
        { CHART_TYPE_MATRIX[type] && CHART_TYPE_MATRIX[type]['description'] &&
          CHART_TYPE_MATRIX[type]['description'].map((line, a) =>
            Array.isArray(line) ?
            <ul key={ `list-${a}` }>{ line.map((l, b) => <li key={ `li-${b}` }>{ l }</li> )}</ul> :
            <p key={ `p-${a}` }>{ `${line}` }</p>
          )
        }
        <h4>Using</h4>
        <nav className="approaches">
          <ul>
            <li><NavLink to={ `/chart-types/${ type }/react-d3-dom` }>React / D3 (owns DOM)</NavLink></li>
            <li><NavLink to={ `/chart-types/${ type }/react-dom-d3` }>React (owns DOM) / D3</NavLink></li>
            <li><NavLink to={ `/chart-types/${ type }/react-recharts` }>React / Recharts</NavLink></li>
            <li><NavLink to={ `/chart-types/${ type }/react-victory` }>React / Victory</NavLink></li>
            <li><NavLink to={ `/chart-types/${ type }/react-vx` }>React / VX</NavLink></li>
            <li><NavLink to={ `/chart-types/${ type }/react-chartJS` }>React / ChartJS</NavLink></li>
          </ul>
        </nav>
      </aside>

    </section>
  )
}

export default withRouter(ChartDemo)
