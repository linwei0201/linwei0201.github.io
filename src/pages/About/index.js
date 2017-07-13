/**
 *  === page ===
 *
 *  created at: Tue Jun 27 2017 18:29:16 GMT+0800 (CST)
 */

import React, {Component} from 'react'
import styles from './index.styl'

export default class extends Component {

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
        "旅行"
      ],
      skills: [
        {
          name: "构建",
          value: ["webpack", "gulp", "npm"]
        },
        {
          name: "框架/模板",
          value: ["react", "react-router", "redux", "ejs"]
        },
        {
          name: "库",
          value: ["jQuery", "bootstrap", "lodash"]
        },
        {
          name: "css",
          value: ["less", "stylus", "css3"]
        },
        {
          name: "其他",
          value: ["html5", "es6", "git", "SQL"]
        }
      ]
    }
  }

  render () {
    let {links, interests, skills} = this.state;
    console.log(skills)
    return (
      <div className="profile-wrapper">
        <img className="avatar" src="https://avatars1.githubusercontent.com/u/12796371?v=3&s=460" />
        <div>Wei Lin</div>
        <div className="title">技能</div>
        {
          skills.map((v, k) => {
            return (
              <div className="skills" key={k}>
                <div className="skill-title">{v.name}</div>
                <ul className="skill-list">
                  {
                    v.value.map((skill, skillKey) => <li key={skillKey}>{skill}</li>)
                  }
                </ul>
              </div>
            )
          })
        }
        <div className="title">兴趣</div>
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