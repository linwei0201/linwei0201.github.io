import './styles/common.styl'
import {Router, Route, hashHistory} from 'react-router'
import routes from './routes'
import {render} from 'react-dom'
import React from 'react'

const routers = routes.map((route, k) => {
  return  <Route
            key={k}
            path={route.path}
            getComponent={(nextState, cb) => {
              route.component()
                .then(mod => cb(null, mod.default))
            }}
          />
})

render(
  <Router history={hashHistory}>
    { routers }
  </Router>, document.getElementById('root'))