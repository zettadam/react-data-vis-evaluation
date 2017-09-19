import React, { Component } from 'react'
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom'

import Introduction from './intro'
import Dthree from './dThree'
import ChartJavascript from './chartJS'
import ReactD3Dom from './react-d3-dom'
import ReactDomD3 from './react-dom-d3'
import ReactD3Wrappers from './react-d3-wrappers'
import ReactD3Modules from './react-d3-modules'
import Summary from './summary'
import Recommendations from './recommendations'
import References from './references'

class App extends Component {

  render () {
    return (
      <Router>
        <div className="app">
          <header>
            <h1>Data visualization and React</h1>
          </header>
          <nav role="navigation">
            <ul>
              <li>Data Visualization
                <ul>
                  <li><NavLink to="/introduction">Introduction</NavLink></li>
                  <li><NavLink to="/d3/introduction">D3</NavLink></li>
                  <li><NavLink to="/chartJS/introduction">ChartJS</NavLink></li>
                </ul>
              </li>
              <li>React and D3
                <ul>
                  <li><NavLink to="/react-d3-dom">React + D3 (owns the DOM)</NavLink></li>
                  <li><NavLink to="/react-dom-d3">React (owns the DOM) + D3</NavLink></li>
                  <li><NavLink to="/react-d3-wrappers">React + D3 wrappers</NavLink></li>
                  <li><NavLink to="/react-d3-modules">React charts + D3 modules</NavLink></li>
                </ul>
              </li>
              <li>Conclusions
                <ul>
                  <li><NavLink to="/summary">Summary</NavLink></li>
                  <li><NavLink to="/recommendations">Recommendations</NavLink></li>
                  <li><NavLink to="/references">References</NavLink></li>
                </ul>
              </li>
            </ul>
          </nav>

          <main>
            <Switch>
              <Route path="/introduction" component={ Introduction } />
              <Route path="/d3" component={ Dthree } />
              <Route path="/chartJS" component={ ChartJavascript } />
              <Route path="/react-d3-dom" component={ ReactD3Dom } />
              <Route path="/react-dom-d3" component={ ReactDomD3 } />
              <Route path="/react-d3-wrappers" component={ ReactD3Wrappers } />
              <Route path="/react-d3-modules" component={ ReactD3Modules } />
              <Route path="/summary" component={ Summary } />
              <Route path="/recommendations" component={ Recommendations } />
              <Route path="/references" component={ References } />
            </Switch>
          </main>

          <footer>
            <p>Sabre | ASPD Web/Mobile Architecture | 2017</p>
          </footer>
        </div>
      </Router>
    )
  }
}

export default App
