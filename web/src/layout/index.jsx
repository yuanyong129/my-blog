import React, { Component } from 'react'
import NavBar from './components/NavBar'
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
        <div className="footer box-shadow" style={{ textAlign: 'center' }}>AntD + React ©2021 ~ Now Created by Yuany </div>
      </div>
    )
  }
}
