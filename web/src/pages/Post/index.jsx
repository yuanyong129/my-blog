import React, { Component } from 'react'
import { Pagination } from 'antd'
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
    postCount: 0,
    tags: [],
    tagsTotal: 0,
    types: []
  }

  searchParams = {
    type: '',
    tag: '',
    page: 1,
    size: 10
  }


  init = async() => {
    this.getPosts()
    this.getParams()
  }

  search = async ({ type, tag }) => {
    this.searchParams.type = type === undefined ? this.searchParams.type : type
    this.searchParams.tag = tag === undefined ? this.searchParams.tag : tag
    this.searchParams.page = 1
    const { data: { list, total, totalAll }} = await getPosts(this.searchParams)
    this.setState({
      posts: list,
      postTotal: total,
      postCount: totalAll
    })
  } 
  // 获取所有帖子
  getPosts = async() => {
    try {
      const { data: { list, total, totalAll }} = await getPosts(this.searchParams)
      this.setState({
        posts: list,
        postTotal: total,
        postCount: totalAll
      })
    } catch (error) {
     console.log('获取所有帖子失败') 
    }
  }
  // 获取所有标签
  getParams = async() => {
    try {
      const { data: { list, total } } = await getParams({ typeId: '60bf112a1c2d992e6879cd89', page: 1, size: 10 })
      const { data: { list: types } } = await getParams({ typeId: '60bf0c5f1c2d992e6879cd87', page: 1, size: 10 })
      this.setState({
        tags: list,
        tagsTotal: total,
        types
      })
    } catch (err) {
      console.log('获取所有标签失败')
    }
  } 

  pagiChange = (page) => {
    this.searchParams.page = page
    this.getPosts()
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
                  <div>{this.state.postCount}</div>
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
                <div className={`classify-item ${this.searchParams.type ? '' : 'active'}`} onClick={() => this.search({type:''})}>全部</div>
                {this.state.types.map(type =>
                  <div
                    key={type._id}
                    className={`classify-item ${this.searchParams.type === type._id ? 'active' : ''}`}
                    onClick={() => this.search({ type: type._id })}
                  >
                    {type.title}
                  </div>)}
              </div>
            </div>
            <div className="tags">
              <div className="title">&nbsp;&nbsp;<TagsFilled />&nbsp;&nbsp;标签</div>
              <div style={{ marginTop: '10px' }}>
                <Tag title='全部' openSelect={true} currentTag={this.searchParams.tag} ownTag='' onClick={() => this.search({tag: ''})} />
                {
                  this.state.tags.map(tag =>
                    <Tag
                      openSelect={true}
                      currentTag={this.searchParams.tag}
                      ownTag={tag._id}
                      key={tag._id}
                      title={tag.title}
                      onClick={() => this.search({ tag: tag._id })}
                    />
                  )
                }
              </div>
            </div>
          </div>
          {
            this.state.posts.length > 0 ?
            <div className="posts">
              {
                this.state.posts.map(post =>
                  <PostItem
                    type={post.type.title}
                    createdAt={post.createdAt}
                    key={post._id}
                    tags={post.tags}
                    title={post.title}
                    onClick={() => this.props.history.push('/blogdetails', post)}
                  />)
              }
              <div style={{textAlign: 'center'}}>
                <Pagination
                  defaultCurrent={this.searchParams.page}
                  simple
                  size="small"
                  total={this.state.postTotal}
                  onChange={this.pagiChange} />
              </div>
            </div> :
            <div className="no-posts">暂无数据···</div>
          }
          
        </div>
      </div>
    )
  }
}
