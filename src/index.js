import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

//import App from './App'
import Home from './Home'

import './styles.css'

const rootEl = document.getElementById('root')

ReactDOM.render(
  <Router>
    <Home />
  </Router>,
  rootEl
)
