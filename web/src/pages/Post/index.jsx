import React, { Component } from 'react'
import {
  AppstoreFilled,
  TagsFilled
} from '@ant-design/icons'
import Avatar from '@/components/Avatar'
import Tag from '@/components/Tag'
import PostItem from './PostItem'
import { getPosts, getParams } from '@/api'
import './index.scss'

export default class Post extends Component {

  state = {
    posts: [],
    postTotal: 0,
    tags: [],
    tagsTotal: 0,
    types: []
  }

  async init() {
    this.getPosts()
    this.getParams()
  }
  // 获取所有帖子
  async getPosts() {
    const { data: { list, total }} = await getPosts({ page: 1, size: 10 })
    this.setState({
      posts: list,
      postTotal: total
    })
  }
  // 获取所有标签
  async getParams() {
    const { data: { list, total } } = await getParams({ typeId: '60bf112a1c2d992e6879cd89', page: 1, size: 10 })
    const { data: { list: types } } = await getParams({ typeId: '60bf0c5f1c2d992e6879cd87', page: 1, size: 10 })
    this.setState({
      tags: list,
      tagsTotal: total,
      types
    })
  }

  componentDidMount() {
    this.init()
  }
  
  render() {
    return (
      <div data-component="post">
        <div className="post-wrap">
          <div className="infos">
            <div className="info">
              <div style={{ textAlign: 'center' }}>
                <Avatar />
              </div>
              <div className="info-name">
                空澄
              </div>
              <div className="info-number flex-row">
                <div>
                  <div>文章</div>
                  <div>{this.state.postTotal}</div>
                </div>
                <div className="divider"></div>
                <div>
                  <div>标签</div>
                  <div>{this.state.tagsTotal}</div>
                </div>
              </div>
            </div>
            <div className="classify">
              <div className="title">&nbsp;&nbsp;<AppstoreFilled />&nbsp;&nbsp;分类</div>
              <div style={{ marginTop: '10px' }}>
                {this.state.types.map(type => <div key={type._id} className="classify-item">{ type.title }</div> ) }
              </div>
            </div>
            <div className="tags">
              <div className="title">&nbsp;&nbsp;<TagsFilled />&nbsp;&nbsp;标签</div>
              <div style={{ marginTop: '10px' }}>
                { this.state.tags.map(tag => <Tag key={tag._id} title={tag.title} />) }
              </div>
            </div>
          </div>
          <div className="posts">
            {
              this.state.posts.map(post =>
                <PostItem
                  type={post.type.title}
                  createdAt={post.createdAt}
                  key={post._id}
                  tags={post.tags}
                  title={post.title}
                />)
            }
          </div>
        </div>
      </div>
    )
  }
}
