import React, { Component } from 'react'
// import { Tag } from 'antd'
import {
  EditFilled,
  BookFilled,
  RightCircleFilled,
} from '@ant-design/icons'
import Card from './components/Card'
import dayjs from 'dayjs'
import Avatar from '@/assets/images/avatar.png'
import { getPosts } from '@/api'
import './index.scss'

export default class Home extends Component {
  state = {
    posts: []
  }
  async init() {
    try {
      const { data } = await getPosts({ page: 1, size: 4 })
      this.setState({
        posts: data
      })
    } catch (error) {
      console.log('初始化首页失败', error)
    }
  }
  componentDidMount() {
    this.init()
  }
  render() {
    return (
      <div data-component="home">
        <div className="up">
          <img className="avatar" src={Avatar} alt="头像-拉碧丝·罗赞贝尔克" />
          <div className="my-intro">
            <div className="name">空澄</div>
            <div className="intro">一名普通的前端攻城狮，falcom忠实粉丝一枚，空澄乃是七月的别称~</div>
          </div>
        </div>
        <div className="new-blog">
          <div className="title flex-row">
            <div className="t-text">
              <EditFilled />&nbsp;&nbsp;最新博客
            </div>
            <RightCircleFilled />
          </div>
          <div className="content">
            {
              this.state.posts.map(post => (
                <Card
                  key={post._id}
                  title={post.title}
                  tags={post.tags}
                  type={post.type? post.type.title: null}
                  createdAt={dayjs(post.createdAt).format('YYYY-MM-DD')} />
              ))
            }
          </div>
        </div>
        <div className="new-novel">
          <div className="title flex-row">
            <div>
              <BookFilled />&nbsp;&nbsp;最新小说
            </div>
            <RightCircleFilled />
          </div>
        </div>

      </div>
    )
  }
}