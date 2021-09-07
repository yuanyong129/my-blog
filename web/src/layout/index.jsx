import React, { Component } from 'react'
// import Logo from './components/Logo'
import NavBar from './components/NavBar'
// import Trigger from '@/components/Trigger'
import MeunDrawer from './components/MenuDrawer'
import ContentView from './components/ContentView'
// import MenuItem from '@/components/MenuItem'
import './index.scss'

export default class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <div className="header box-shadow" style={{ padding: 0 }}>
          <NavBar />
        </div>
        <div className="content no-scrollbar" style={{ minHeight: 280 }}>
          <ContentView />
        </div>
        <MeunDrawer />
      </div>
    )
  }
}
