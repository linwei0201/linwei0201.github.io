/**
 *  === page ===
 *
 *  created at: Tue Jun 27 2017 18:29:16 GMT+0800 (CST)
 */

import React, {Component} from 'react'

export default class Index extends Component {
  render () {
    return (
      <div>
        <div className="wrap">
          <h1>404</h1> <h2>Not Found</h2>
          <p>The page you were trying to reach doesn't exist.</p>
        </div>
        <div className="footer">with <b>♥</b> by lianjia-fe</div>
      </div>
    )
  }
}