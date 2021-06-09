import React, { Component } from 'react'
import AvatarSrc from '@/assets/images/avatar.png'
import './index.scss'

export default class Avatar extends Component {
  render() {
    return (
      <div data-component="avatar">
        <img className="avatar" src={AvatarSrc} alt="头像-拉碧丝·罗赞贝尔克" />
      </div>
    )
  }
}
