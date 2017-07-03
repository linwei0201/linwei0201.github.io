/**
 *  === page ===
 *
 *  created at: Tue Jun 27 2017 18:29:16 GMT+0800 (CST)
 */

import { React, Page } from 'zola'

const ARTICLE_LIST = MY_ARTICLE_LIST.slice(0, 3);

export default class Index extends Page {

  constructor(props) {
    super(props);
  }

  render () {
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
                      <a href="https://twitter.com/SBootstrap" className="btn btn-default btn-lg">
                        <i className="fa fa-twitter fa-fw"></i>
                        <span className="network-name">Twitter</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/linwei0201" className="btn btn-default btn-lg">
                        <i className="fa fa-github fa-fw"></i>
                        <span className="network-name">Github</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="btn btn-default btn-lg">
                        <i className="fa fa-linkedin fa-fw"></i>
                        <span className="network-name">Linkedin</span>
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
                      <p className="lead">假数据文章摘要</p>
                      <a href={`#/blog/${v.filename}`}>详细信息</a>
                    </div>
                    <div className="col-lg-5 col-lg-offset-2 col-sm-6">
                      <img className="img-responsive" src="resources/ipad.png" alt="" />
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