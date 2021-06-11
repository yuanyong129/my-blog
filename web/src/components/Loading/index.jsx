import React, { Component } from 'react'
import CHR from '@/assets/images/avatar.png'
import './index.scss'

export default class Loading extends Component {
  render() {
    return (
      <div data-component="loading">
        <div id="loading-ill">
          <img src={CHR} alt="拉碧丝·罗赞贝尔克" />
        </div>
        <div id="loading">
          <span>Now Loading···</span>
        </div>
      </div>
    )
  }
}
