/**
 *  === page ===
 *
 *  created at: Tue Jun 27 2017 18:29:16 GMT+0800 (CST)
 */

import { React, Page } from 'zola'
import styles from './index.styl'

export default class extends Page {

  constructor(props) {
    super(props);
    this.state = {
      links: [
        {
          name: 'Weibo',
          url: 'http://weibo.com/p/1005051727199593/home',
          icon: 'icon-weibo'
        },
        {
          name: 'Github',
          url: 'https://github.com/linwei0201',
          icon: 'icon-github'
        }
      ],
      interests: [
        "瑜伽",
        "钢琴",
        "coding",
        "tvb",
        "阿加莎",
        "王者荣耀"
      ]
    }
  }

  render () {
    let {links, interests} = this.state;
    return (
      <div className="profile-wrapper">
        <img className="avatar" src="https://avatars1.githubusercontent.com/u/12796371?v=3&s=460" />
        <div></div>
        <div className="title">兴趣爱好</div>
        <ul className="interests">
          {
            interests.map((v, k) => <li key={k}>{v}</li>)
          }
        </ul>
        <ul className="links">
          {
            links.map(v => <li key={v.icon}><a href={v.url} target="_blank"><i className={v.icon}></i></a></li>)
          }
        </ul>
      </div>
    )
  }
}