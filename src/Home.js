import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'

import CHART_TYPE_MATRIX from 'chart-matrix.json'
import ChartDemo from './ChartDemo'


const sortedChartTypes = Object.keys(CHART_TYPE_MATRIX)
  .map(k => ({ type: k, ...CHART_TYPE_MATRIX[k]}))
  .filter(c => c.focus)
  .sort((a, b) => {
    const titleA = a.type.toLowerCase()
    const titleB = b.type.toLowerCase()
    if (titleA < titleB) return -1
    if (titleA > titleB) return 1
    return 0
  })

const Home = () =>
  <div className="home">

    <main className="grid content">
      <header className="content__header">
        <h1>React and Data Visualization</h1>
      </header>

      <div className="content__body">
        <Switch>
          <Route path="/chart-types/:type" component={ ChartDemo } />
        </Switch>
      </div>
    </main>

    <aside className="grid sidebar">
      <h3>Chart t<span>yp</span>es</h3>
      <nav className="chart-type__list">
      { sortedChartTypes &&
        <ul>{ sortedChartTypes.map((t, i) =>
          <li key={ `chart-type__${ t.type }` }><NavLink to={ `/chart-types/${ t.type }` }>{ t.title }</NavLink></li> )}
        </ul> }
      </nav>

      <nav className="main_nav">
        <ul>
          <li><a href="">Introduction</a></li>
          <li><a href="">D3</a></li>
          <li><a href="">Using D3 in React applications</a>
            <ol>
              <li><a href="">D3 owns DOM and draws charts</a></li>
              <li><a href="">React owns DOM and D3 draws charts</a></li>
              <li><a href="">React owns DOM and draws the charts</a></li>
            </ol>
          </li>
          <li><a href="">Recommendations</a></li>
          <li><a href="">References</a></li>
        </ul>
      </nav>

    </aside>

    <footer className="grid footer">
      <p>2017 Adam Ziolkowski</p>
    </footer>

  </div>

  export default Home
