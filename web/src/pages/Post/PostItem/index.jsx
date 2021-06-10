import React, { Component } from 'react'
import dayjs from 'dayjs'
import Tag from '@/components/Tag'
import './index.scss'

export default class PostItem extends Component {
  render() {
    return (
      <div data-component="post-item" onClick={this.props.onClick}>
        <div>{this.props.tags.map(tag => <Tag key={tag._id} title={tag.title} bgColor="#FF9613" />)}</div>
        <div className="p-title">
          {this.props.title}&nbsp;&nbsp;&nbsp;&nbsp;
          <span style={{ fontSize: '14px', color: '#8CC456' }}>{this.props.type}</span>
        </div>
        <div style={{marginTop: '10px'}}>{ dayjs(this.props.createdAt).format('YYYY-MM-DD') } 发布</div>
      </div>
    )
  }
}
