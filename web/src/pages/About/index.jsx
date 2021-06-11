import React, { Component } from 'react'
import './index.scss'

export default class About extends Component {
  render() {
    return (
      <div data-component="about">
        <div>我是谁？</div>
        <div className="hidden">暂时不告诉你(∀｀*ゞ)ｴﾍﾍ</div>
      </div>
    )
  }
}
