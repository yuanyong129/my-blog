import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './index.scss'

export default class index extends Component {
  render() {
    return (
      <div data-component="menu-item">
        <NavLink className="menu-body" to={ this.props.to }>
          { this.props.text }
          <div className="under-line"></div>
        </NavLink>
        <div className="triangle"></div>
      </div>
    )
  }
}
