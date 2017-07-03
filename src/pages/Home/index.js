/**
 *  === page ===
 *
 *  created at: Tue Jun 27 2017 18:29:16 GMT+0800 (CST)
 */

import { React, Page } from 'zola'
import styles from './index.styl'

const ARTICLE_LIST = MY_ARTICLE_LIST.slice(0, 3);

export default class Index extends Page {

  constructor(props) {
    super(props);
  }

  render () {
    let env = process.env.NODE_ENV;
    let prefix = (process.env.NODE_ENV == "development") ? "" : "https://linwei0201.github.io/dist/";
    return (
      <div>
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
        <div id="blogs">
        {
          ARTICLE_LIST.map((v, k) => {
            return (
              <div key={k} className="content-section-a">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-5 col-sm-6">
                      <hr className="section-heading-spacer" />
                      <div className="clearfix"></div>
                      <h2 className="section-heading">{v.title}<br />by {v.author || "匿名"}</h2>
                      <p className="lead">{v.summary}</p>
                      <a href={`#/blog/${v.filename}`}>查看更多</a>
                    </div>
                    <div className="col-lg-5 col-lg-offset-2 col-sm-6">
                      <img className="img-responsive" src={`${prefix}resources/ipad.png`} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
        </div>
      </div>
    )
  }
}