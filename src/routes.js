import React from 'react'
import {HashRouter as Router, Route, Redirect, Switch} from 'react-router-dom'

import Home from 'pages/Home'
import List from 'pages/List'
import Article from 'pages/Article'
import About from 'pages/About'

export default props => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/blogs" component={List} />
        <Route path="/aboutme" component={About} />
        <Route path="/blog/:path" component={Article} />
      </div>
    </Router>
  )
}