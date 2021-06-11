import React, { Component } from 'react'
import { Space } from 'antd'
import { NavLink } from 'react-router-dom'
import Trigger from '@/components/Trigger'
import Logo from '../Logo'
import './index.scss'

export default class NavBar extends Component {
  
  render() {
    return (
      <div data-component="navbar">
        <div className="nav-bar">
          <Space className="web-nav">
            <Logo />
            <NavLink className="my-link" to="/" > 首页 </NavLink>
            <NavLink className="my-link" to="/blog" > 我的博客 </NavLink>
            {/* <NavLink className="my-link" to="/novel" > 我的小说 </NavLink>
            <NavLink className="my-link" to="/origami" > 我的折纸 </NavLink> */}
            <NavLink className="my-link" to="/about" > 关于 </NavLink>
          </Space>
          <div className="phone-nav">
            <Trigger />
            <Logo />
          </div>
        </div>
      </div>
    )
  }
}
