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
    let env = process.env.NODE_ENV;
    let prefix = (process.env.NODE_ENV == "development") ? "" : "https://linwei0201.github.io/dist/";
    return (
      <div className="intro-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="intro-message">
                <h1>Hello, World</h1>
                <h3>miss vivians blog</h3>
                <hr className="intro-divider" />
                <ul className="list-inline intro-social-buttons">
                  <li>
                    <a href="http://weibo.com/p/1005051727199593/home" className="btn btn-default btn-lg">
                      <i className="fa fa-twitter fa-fw"></i>
                      <span className="network-name">WEIBO</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/linwei0201" className="btn btn-default btn-lg">
                      <i className="fa fa-github fa-fw"></i>
                      <span className="network-name">Github</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.zhihu.com/people/nan-guo-90-37" className="btn btn-default btn-lg">
                      <i className="fa fa-linkedin fa-fw"></i>
                      <span className="network-name">ZHIHU</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}