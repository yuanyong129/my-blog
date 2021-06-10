import React, { Component } from 'react'
import marked from 'marked'
import { } from './index.scss'

export default class PostDetails extends Component {
  componentDidMount() {
    console.log(this.props.location.state)
  }
  render() {
    return (
      <div data-component="post-details">
        <div className="post-content-wrap">
          <div className="post-title">
            {this.props.location.state.title}
          </div>
          <div className="post-article" dangerouslySetInnerHTML={{__html: marked(this.props.location.state.content)}}></div>
        </div>
      </div>
    )
  }
}
