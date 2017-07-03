/**
 *  === page ===
 *
 *  created at: Tue Jun 27 2017 18:29:16 GMT+0800 (CST)
 */

import { React, Page } from 'zola'
import fetch from 'utils/fetch'
import showdown from 'showdown'
import styles from './index.styl'

const converter = new showdown.Converter();

export default class extends Page {

  constructor(props) {
    super(props);
    this.state = {
      content: '',
      author: '匿名',
      createTime: '',
      title: '',
      tags: []
    }
  }

  getArticleInfo(data){
    let obj = {};
        data = data.substring(3, data.length - 3);
    const arr = data.split("\n");
    arr.forEach(v => {
      if(!!v.trim()){
        const temp = v.split(":");
        obj[temp[0].trim()] = temp[1].trim();
      }
    })
    return obj;
  }

  componentDidMount() {
    let {params} = this.props;
    let {path} = params;

    fetch(`/article/${path}.md`, {text: true})
      .then(data => {
        const start = data.indexOf("---");
        const end = data.indexOf("---", start+3) + 3;
        const substring = data.substring(start, end);
        const {author, createTime, title} = this.getArticleInfo(substring);

        data = data.replace(substring, "")
        this.setState({content: converter.makeHtml(data), author, createTime, title})
      })
  }

  render () {
    let {content, author, createTime, title, tags} = this.state;
    return (
      !!content
      ? <div className="article-wrapper">
          <div className="article-header">
            <h1>{title}</h1>
            <div className="author">
              <span>{author},   {createTime}</span>
            </div>
            <div className="article-tags">
              {
                tags.map(v => <span>{v}</span>)
              }
            </div>
          </div>
          <div dangerouslySetInnerHTML={{__html: content}}></div>
        </div>
      : <div>Loading...</div>
    )
  }
}