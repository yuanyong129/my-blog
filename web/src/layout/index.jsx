import React, { Component } from 'react'
import { Layout } from 'antd'
import Logo from './components/Logo'
import NavBar from './components/NavBar'
import MenuList from './components/MenuList'
import ContentView from './components/ContentView'
import { getToken, clearAll } from '@/utils/auth'
import './index.scss'

const { Header, Sider, Content, Footer } = Layout

class SiderMenu extends Component {
  state = {
    collapsed: false,
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }
  menuClick = (e) => {
      this.props.history.push(e.key) 
  }

  isLogin = () => getToken()

  logout = () => {
    clearAll()
    this.props.history.push('/login')
  }

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <Logo collapsed={this.state.collapsed} />
          <MenuList onMenuClick={this.menuClick} isLogin={this.isLogin} logout={this.logout} />
        </Sider>
        <Layout className="site-layout">
          <Header className="header box-shadow" style={{ padding: 0 }}>
            <NavBar collapsed={this.state.collapsed} onToggle={this.toggle} onLogout={this.logout} />
          </Header>
          <Content className="content" style={{ minHeight: 280}}>
            <ContentView />
          </Content>
          <Footer className="footer box-shadow" style={{ textAlign: 'center' }}>AntD + React ©2021 ~ Now Created by Yuany </Footer>
        </Layout>
      </Layout>
    )
  }
}
export default SiderMenu
