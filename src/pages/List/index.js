/**
 *  === page ===
 *
 *  created at: Tue Jun 27 2017 18:29:16 GMT+0800 (CST)
 */

import { React, Page } from 'zola'
import styles from './index.styl'

const ARTICLE_LIST = MY_ARTICLE_LIST;

export default class extends Page {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render () {
    console.log(ARTICLE_LIST)
    return (
      <div className="blogs-wrapper">
      {
        ARTICLE_LIST.map((v, k) => {
          return (
            <div key={k} className="post-preview">
              <a href={`#/blog/${v.filename}`}>
                  <h2 className="post-title">{v.title}</h2>

                  <h3 className="post-subtitle">{v.subtitle}</h3>

                  <div className="post-content-preview">{v.summary}</div>
              </a>
              <p className="post-meta">Posted by {v.author} on {v.createTime}</p>
            </div>
          )
        })
      }
      </div>
    )
  }
}