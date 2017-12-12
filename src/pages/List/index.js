/**
 *  === page ===
 *
 *  created at: Tue Jun 27 2017 18:29:16 GMT+0800 (CST)
 */

import React, {Component} from 'react'
import './index.styl'
import articleList from 'data/article'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className="blogs-wrapper">
        {
          articleList.map(v => (
            <div key={v.filename} className="post-preview">
              <a href={`#/blog/${v.filename}`}>
                <h2 className="post-title">{v.title}</h2>
                <h3 className="post-subtitle">{v.subtitle}</h3>
                <div className="post-content-preview">{v.summary}</div>
              </a>
              <p className="post-meta">Posted by {v.author} on {v.createTime}</p>
            </div>
          ))
        }
      </div>
    )
  }
}
