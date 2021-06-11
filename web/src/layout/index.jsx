import React, { Component } from 'react'
import NavBar from './components/NavBar'
import Trigger from '@/components/Trigger'
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
        <div className="header-phone" style={{ padding: '5px' }}>
          <Trigger />
        </div>
        <div className="content no-scrollbar" style={{ minHeight: 280 }}>
          <div className="header-holder"></div>
          <ContentView />
        </div>
        <div className="footer" style={{ textAlign: 'center' }}>AntD + React ©2021 ~ Now Created by Yuany </div>
        <MeunDrawer />
      </div>
    )
  }
}
