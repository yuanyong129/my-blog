import React, { Component } from 'react'
import './index.scss'

export default class Tag extends Component {
  render() {
    return (
      <div
        data-component="tag"
        className={ this.props.openSelect ?  (this.props.currentTag === this.props.ownTag) ? 'active' : '' : ''}
        style={{ backgroundColor: this.props.bgColor }}
        onClick={this.props.onClick}
      >
        {this.props.title}
      </div>
    )
  }
}
