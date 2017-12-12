/**
 *  === page ===
 *
 *  created at: Tue Jun 27 2017 18:29:16 GMT+0800 (CST)
 */

import React, {Component} from 'react'
import './index.styl'
import articleList from 'data/article'
import highlight from 'highlight.js'
import Loading from 'modules/loading'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: '',
      author: '匿名',
      createTime: '',
      title: '',
      tags: [],
      pageTitle: ''
    }
  }

  componentWillMount() {
    const {params} = this.props.match
    const {path} = params

    const article = articleList.find(v => v.filename === path)
    article.component().then(content => {
      this.setState({
        content,
        author: article.author,
        createTime: article.createTime,
        title: article.title,
        tags: article.tags || []
      })
    })
    this.setState({pageTitle: document.title})
    document.title = article.title
  }

  componentDidUpdate() {
    const blocks = Array.from(document.querySelectorAll('pre code'))
    blocks.forEach(block => highlight.highlightBlock(block))
  }

  componentWillUnmount() {
    document.title = this.state.pageTitle
  }

  render() {
    const {
      content,
      author,
      createTime,
      title,
      tags
    } = this.state
    return (
      <div className="article-wrapper">
        {
          content
            ? <div>
              <div className="article-header">
                <div className="header-wrap">
                  <h1>{title}</h1>
                  <div className="pub-time">
                    <i className="icon-calendar" /><span>{createTime}</span>
                  </div>
                  <div className="author">
                    <i className="icon-user" /><span>{author}</span>
                  </div>
                  <div className="article-tags">
                    {
                      tags.map(v => <span>{v}</span>)
                    }
                  </div>
                </div>
              </div>
              <div className="article-content" dangerouslySetInnerHTML={{__html: content}} />
            </div>
            : <Loading />
        }
      </div>
    )
  }
}
