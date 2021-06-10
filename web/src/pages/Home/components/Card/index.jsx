import React, { Component } from 'react'
import './index.scss'

export default class Card extends Component {
  render() {
    return (
      <div className="card-wrap" data-component="card" onClick={this.props.onClick}>
        <div className="c-intro">
          <div className="c-title">{this.props.title}</div>
          <div className="c-hide">
            {this.props.tags ? this.props.tags.map(tag => <div key={tag._id} className="c-tag">{tag.title}</div>) : ''}
            <div>
              { this.props.type ? <div className="c-type">{this.props.type}</div> : '' }
              <div className="create-time">{this.props.createdAt }</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
