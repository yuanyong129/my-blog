import React, { Component } from 'react'
import './index.scss'
export default class CommonPage extends Component {
  render() {
    return (
      <div className="common-page" data-component="commonpage">
        <div className="title">{this.props.title}</div>
        <div className="content box-shadow">
          {this.props.children}
        </div>
      </div>
    )
  }
}
