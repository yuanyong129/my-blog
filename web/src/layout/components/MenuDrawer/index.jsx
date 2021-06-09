import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import PubSub from 'pubsub-js'
import { PUBSUB } from '@/utils'
import './index.scss'

export default class MenuDrawer extends Component {
  state = {
    drawerStyle: {
      right: '-110%'
    }
  }

  pubsubToken = null

  // 打开菜单抽屉
  showDrawer = (collapsed) => {
    if (!collapsed) {
      this.drawerStyle = { right: '-10%' }
      this.setState({
        drawerStyle: {
          right: '-10%'
        }
      })
    } else {
      this.setState({
        drawerStyle: {
          right: '-110%'
        }
      })
    }
  }
  clickMenu = () => {
    PubSub.publish(PUBSUB.CLOSEDRAWER)
  }
  
  componentDidMount() {
    this.pubsubToken = PubSub.subscribe(PUBSUB.OPENDRAWER, (msg, data) => {
      this.showDrawer(data)
    })
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.pubsubToken)
  }

  render() {
    return (
      <div data-component="menu-drawer" style={this.state.drawerStyle}>
        <NavLink className="my-link" to='/' onClick={this.clickMenu}>
          <div>首页</div>
          <div className="en">HOME</div>
        </NavLink>
        <NavLink className="my-link" to='/blog' onClick={this.clickMenu}>
          <div>我的博客</div>
          <div className="en">MY BLOG</div>
        </NavLink>
        <NavLink className="my-link" to='/novel' onClick={this.clickMenu}>
          <div>我的小说</div>
          <div className="en">MY LIGHT NOVEL</div>
        </NavLink>
        <NavLink className="my-link" to='/origami' onClick={this.clickMenu}>
          <div>我的折纸</div>
          <div className="en">MY ORIGAMI</div>
        </NavLink>
        <NavLink className="my-link" to='/about' onClick={this.clickMenu}>
          <div>关于</div>
          <div className="en">ABOUT</div>
        </NavLink>
      </div>
    )
  }
}
