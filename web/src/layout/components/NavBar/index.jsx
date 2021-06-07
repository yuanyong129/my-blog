import React, { Component } from 'react'
import { Space } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons'
import { getUsername } from '@/utils/auth'
import './index.scss'

export default class NavBar extends Component {
  state = {
    username: getUsername()
  }
  render() {
    return (
      <div data-component="NavBar">
        <div className="nav-bar flex-row">
          {React.createElement(this.props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.props.onToggle
          })}
          
          <Space className="user-info">
            <div className="welcome"> {this.state.username}，欢迎登录！ </div>
            <div className="log-out" onClick={this.props.onLogout}>退出登录</div>
          </Space>
        </div>
      </div>
    )
  }
}
