import React, { Component } from 'react'
import NavBar from './components/NavBar'
import MeunDrawer from './components/MenuDrawer'
import ContentView from './components/ContentView'
import './index.scss'

export default class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <div className="header box-shadow" style={{ padding: 0 }}>
          <NavBar />
        </div>
        <div className="content no-scrollbar" style={{ minHeight: 280}}>
          <ContentView />
        </div>
        <div className="footer" style={{ textAlign: 'center' }}>AntD + React ©2021 ~ Now Created by Yuany </div>
        <MeunDrawer />
        {/* <div className="menu-drawer" style={this.drawerStyle}>
          <NavLink className="my-link" to='/' onClick={this.onTrigger}>
            <div>首页</div>
            <div className="en">HOME</div>
          </NavLink>
          <NavLink className="my-link" to='/blog' onClick={this.onTrigger}>
            <div>我的博客</div>
            <div className="en">MY BLOG</div>
          </NavLink>
          <NavLink className="my-link" to='/blog' onClick={this.onTrigger}>
            <div>我的小说</div>
            <div className="en">MY LIGHT NORVEL</div>
          </NavLink>
          <NavLink className="my-link" to='/blog' onClick={this.onTrigger}>
            <div>我的折纸</div>
            <div className="en">MY ORIGAMI</div>
          </NavLink>
          <NavLink className="my-link" to='/blog' onClick={this.onTrigger}>
            <div>关于</div>
            <div className="en">ABOUT</div>
          </NavLink>
        </div> */}
      </div>
    )
  }
}
