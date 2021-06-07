import React, { Component } from 'react'
import CommonPage from '@/components/CommonPage'
import './index.scss'

export default class Role extends Component {

  render() {
    return (
      <div data-component="role">
        <CommonPage title="角色管理">
          <div className="wrap">
          </div>
        </CommonPage>
      </div>
    )
  }
}