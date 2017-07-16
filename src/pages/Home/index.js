/**
 *  === page ===
 *
 *  created at: Tue Jun 27 2017 18:29:16 GMT+0800 (CST)
 */

import React, {Component} from 'react'
import styles from './index.styl'

export default class Index extends Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="intro-header">
        <div className="container">
          <div className="intro-message">
            <h1>Big Big World</h1>
            <h3>miss vivians blog</h3>
            <hr className="intro-divider" />
            <ul className="list-inline intro-social-buttons">
              <li>
                <a href="http://weibo.com/p/1005051727199593/home" className="btn btn-default btn-lg">
                  <i className="icon icon-weibo"></i>
                  <span className="network-name">WeiBo</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/linwei0201" className="btn btn-default btn-lg">
                  <i className="icon icon-github"></i>
                  <span className="network-name">Github</span>
                </a>
              </li>
              <li>
                <a href="https://www.zhihu.com/people/nan-guo-90-37" className="btn btn-default btn-lg">
                  <i className="fa fa-linkedin fa-fw"></i>
                  <span className="network-name">ZhiHu</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}