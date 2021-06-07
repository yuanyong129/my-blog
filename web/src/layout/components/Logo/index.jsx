import React, { Component } from 'react'
import './index.scss'
import logo from '@/assets/svg/logo.svg'

export default class Logo extends Component {
  render() {
    return (
      <div data-component="logo">
        <div className="logo" >
          <img className="logo-img" src={this.props.collapsed ? '' : logo} alt="" />
        </div>
      </div>
    )
  }
}
