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
          <ul className="chart-list">
            <li><NavLink to="" className="chart-link__area-graph" title="Area Graph"><img src="/static/area-graph-1.svg" /></NavLink></li>
            <li><NavLink to="" className="chart-link__bar-chart" title="Bar Chart"><img src="/static/bar-chart-2.svg" /></NavLink></li>
            <li><NavLink to="" className="chart-link__box-plot" title="Box Plot"><img src="/static/box-plot-3.svg" /></NavLink></li>
            <li><NavLink to="" className="chart-link__bubble-chart" title="Bubble Chart"><img src="/static/bubble-chart-1.svg" /></NavLink></li>
            <li><NavLink to="" className="chart-link__bubble-map" title="Bubble Map"><img src="/static/bubble-map-1.svg" /></NavLink></li>
            <li><NavLink to="" className="chart-link__buller-graph" title="Bullet Graph"><img src="/static/bullet-point-graph-2.svg" /></NavLink></li>
            <li><NavLink to="" className="chart-link__candlestick-chart" title="Candlestick Chart"><img src="/static/candlestick-chart-1.svg" /></NavLink></li>
            <li><NavLink to="" className="chart-link__circle-packing-chart" title="Circular Treemap"><img src="/static/circular-treemap-1.svg" /></NavLink></li>
            <li><NavLink to="" className="chart-link__chord-diagram" title="Chord Diagram"><img src="/static/chord-diagram-1.svg" /></NavLink></li>
            <li><NavLink to="" className="chart-link__choropleth-map" title="Choropleth Map"><img src="/static/choropleth-map-1.svg" /></NavLink></li>
            <li><NavLink to="" className="chart-link__connection-map" title="Connection Map"></NavLink></li>
            <li><NavLink to="" className="chart-link__density-plot" title="Density Plot"></NavLink></li>
            <li><NavLink to="" className="chart-link__donut-chart" title="Donut Chart"><img src="/static/donut-chart-1.svg" /></NavLink></li>
            <li><NavLink to="" className="chart-link__dot-map" title="Dot Map"></NavLink></li>
            <li><NavLink to="" className="chart-link__dot-matrix-chart" title="Dot Matrix Chart"></NavLink></li>
            <li><NavLink to="" className="chart-link__error-plot" title="Error Bar"><img src="/static/error-bars-1.svg" /></NavLink></li>
            <li><NavLink to="" className="chart-link__flow-map" title="Flow Map"></NavLink></li>
            <li><NavLink to="" className="chart-link__heatmap" title="Heatmap"></NavLink></li>
            <li><NavLink to="" className="chart-link__histogram" title="Histogram"><img src="/static/histogram-1.svg" /></NavLink></li>
            <li><NavLink to="" className="chart-link__kagi-chart" title="Kagi Chart"></NavLink></li>
            <li><NavLink to="" className="chart-link__line-graph" title="Line Graph"><img src="/static/line-graph-3.svg" /></NavLink></li>
            <li><NavLink to="" className="chart-link__merimekko-chart" title="Merimekko Chart"></NavLink></li>
            <li><NavLink to="" className="chart-link__multi-set-bar-chart" title="Multi-set Bar Chart"></NavLink></li>
            <li><NavLink to="" className="chart-link__network-diagram" title="Network Diagram"><img src="/static/network-diagram-1.svg" /></NavLink></li>
            <li><NavLink to="" className="chart-link__nightingale-rose-chart" title="Nightingale Rose Chart"></NavLink></li>
            <li><NavLink to="" className="chart-link__nested-bubble-comparisom-chart" title="Nested Bubble Comparison">
              <img src="/static/nested-bubble-comparison-chart-1.svg" /></NavLink></li>
            <li><NavLink to="" className="chart-link__non-ribbon-chord-diagram" title="Non-ribbon Chord Diagram"></NavLink></li>
            <li><NavLink to="" className="chart-link__parallel-coordinates-plot" title="Parallel Coordinates Plot"></NavLink></li>
            <li><NavLink to="" className="chart-link__parallel-sets" title="Parallel Sets"></NavLink></li>
            <li><NavLink to="" className="chart-link__pie-chart" title="Pie Chart"><img src="/static/pie-chart-1.svg" /></NavLink></li>
            <li><NavLink to="" className="chart-link__radar-chart" title="Radar Chart"></NavLink></li>
            <li><NavLink to="" className="chart-link__scatter-plot" title="Scatter Plot"><img src="/static/scatter-plot-1.svg" /></NavLink></li>
            <li><NavLink to="" className="chart-link__segmented-chart" title="Segmented Chart"><img src="/static/segmented-chart-1.svg" /></NavLink></li>
            <li><NavLink to="" className="chart-link__span-chart" title="Span Chart"><img src="/static/span-chart-1.svg" /></NavLink></li>
            <li><NavLink to="" className="chart-link__stacked-area-chart" title="Stacked Area Chart"></NavLink></li>
            <li><NavLink to="" className="chart-link__stacked-bar-chart" title="Stacked Bar Chart"><img src="/static/stacked-bar-graph-1.svg" /></NavLink></li>
            <li><NavLink to="" className="chart-link__stream-graph" title="Stream Graph"><img src="/static/stream-graph-1.svg" /></NavLink></li>
            <li><NavLink to="" className="chart-link__sunburst-diagram" title="Sunburst Diagram"></NavLink></li>
            <li><NavLink to="" className="chart-link__treemap" title="Treemap"><img src="/static/treemap-2.svg" /></NavLink></li>
            <li><NavLink to="" className="chart-link__voronoi-chart" title="Voronoi Chart"></NavLink></li>
          </ul>
          <nav role="navigation">
            <ul className="approaches">
              <li><NavLink to="/chartJS/">ChartJS</NavLink></li>
              <li><NavLink to="/react-d3-dom">React + D3 (Dom)</NavLink></li>
              <li><NavLink to="/react-dom-d3">React (DOM) + D3</NavLink></li>
              <li><NavLink to="/react-recharts">Recharts</NavLink></li>
              <li><NavLink to="/react-victory">Victory</NavLink></li>
              <li><NavLink to="/react-vx">VX</NavLink></li>
            </ul>
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
            <header>
              <h1>Data visualization and React</h1>
            </header>
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
            <footer>
              <p>Sabre | ASPD Web/Mobile Architecture | 2017</p>
            </footer>
          </main>
        </div>
      </Router>
    )
  }
}

export default App
