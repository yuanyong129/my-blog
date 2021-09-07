import React, { Component } from 'react'
import Trigger from '@/components/Trigger'
import Logo from '../Logo'
import './index.scss'

export default class NavBar extends Component {
  
  render() {
    return (
      <div data-component="navbar">
        <div className="nav-bar">
          <div className="phone-nav flex-row">
            <Logo />
            <Trigger color="skyblue" margin="0 10px" />
          </div>
        </div>
      </div>
    )
  }
}
