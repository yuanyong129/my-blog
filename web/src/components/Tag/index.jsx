import React, { Component } from 'react'
import './index.scss'

export default class Tag extends Component {
  render() {
    return (
      <div data-component="tag" style={{backgroundColor: this.props.bgColor}}>
        {this.props.title}
      </div>
    )
  }
}
