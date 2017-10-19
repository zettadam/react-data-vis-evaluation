import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import Home from './Home'

import 'styles/styles.css'

const rootEl = document.getElementById('root')

ReactDOM.render(
  <Router>
    <Home />
  </Router>,
  rootEl
)
