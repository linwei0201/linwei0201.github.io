import React from 'react'
import {render} from 'react-dom'
import RouterComponent from './routes'
import './styles/common.styl'

render(
  <div>
    <nav className="topnav clear" role="navigation">
      <div className="topnav-left">
        <a className="nav-link" href="#">Home</a>
      </div>
      <ul className="topnav-right">
        <li>
          <a href="#/aboutme">About</a>
        </li>
        <li>
          <a href="#/blogs">Blogs</a>
        </li>
      </ul>
    </nav>
    <RouterComponent />
    <footer>
      <div className="container">
        <ul className="list-inline">
          <li>
            <a href="#">Home</a>
          </li>
          <li className="footer-menu-divider">&sdot;</li>
          <li>
            <a href="#/aboutme">About</a>
          </li>
          <li className="footer-menu-divider">&sdot;</li>
          <li>
            <a href="#/blogs">Blogs</a>
          </li>
          <li className="footer-menu-divider">&sdot;</li>
        </ul>
        <p className="copyright text-muted small">Copyright &copy; linwei0201@126.com 2017. All Rights Reserved</p>
      </div>
    </footer>
  </div>, document.getElementById('root'))