import React, { Component } from 'react'
import { Menu } from 'antd'
import router from '@/router'
const { SubMenu, Item } = Menu

export default class MenuList extends Component {
  // 渲染路由
  renderRouter = router => {
    return router.map(item => {
      if (item.children) {
        return (
          <SubMenu key={item.path} icon={item.icon} title={item.title}>
            { this.renderRouter(item.children) }
          </SubMenu>
        )
      } else {
        return <Item key={item.path} onClick={e => this.props.onMenuClick(e)} icon={item.icon}> { item.title } </Item>
      }
    })
  }
  renderStringRouter = router => {
    return router.map(item => {
      if (item.children) {
        return `<SubMenu key="${item.path}" icon="${item.icon}" title="${item.title}">
            ${ this.renderStringRouter(item.children) }
          </SubMenu>`
      } else {
        return `<Item key="${item.path}" onClick={e => this.props.onMenuClick(e)} icon="${item.icon}"> ${ item.title } </Item>`
      }
    })
  }
  // 权限判断
  auth() {
    if (this.props.isLogin()) {
      return this.renderRouter(router)
    } else {
      this.props.logout()
    }
  }
  render() {
    return (
      <div data-component="MenuList">
        <div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            { this.auth() }
          </Menu>
        </div>
      </div>
    )
  }
}
