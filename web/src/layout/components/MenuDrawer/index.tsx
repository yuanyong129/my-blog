import { FC, useState, useEffect, CSSProperties } from 'react'
import { NavLink } from 'react-router-dom'
import PubSub from 'pubsub-js'
import dayjs from 'dayjs'
import { PUBSUB } from '@/utils'
// import Trigger from '@/components/Trigger'
import './index.scss'

export default (() => {

  const [ drawerStyle, setDrawerStyle ] = useState<CSSProperties>({
    top: '-120vh',
    opacity: 0
  })
  let pubsubToken: string

  // 打开菜单抽屉
  const showDrawer = (collapsed: boolean) => {
    if (!collapsed) {
      setDrawerStyle({ top: '0', opacity: 1 })
    } else {
      setDrawerStyle({ top: '-120vh', opacity: 0 })
    }
  }
  // 点击菜单
  const clickMenu = () => {
    PubSub.publish(PUBSUB.CLOSEDRAWER)
  }

  useEffect(() => {
    pubsubToken = PubSub.subscribe(PUBSUB.OPENDRAWER, (msg, data) => {
      showDrawer(data)
    })
    return () => {
      PubSub.unsubscribe(pubsubToken)
    }
  })
  

  return (
    <div data-component="menu-drawer" style={drawerStyle}>
      <div className="menu-d-left">
      </div>

      <div className="menu-d-center">
        <div className="menu-date">
          DATE:&nbsp;&nbsp;{ dayjs(Date.now()).format('YYYY-DD-MM')  }
        </div>
      </div>

      <div className="menu-d-right">
        <div  className="menu-top">
          <NavLink className="my-link" to='/' onClick={clickMenu}>
            <div>首页</div>
            <div className="en">HOME</div>
          </NavLink>
        </div>
        <div className="menu-left"> 
          <NavLink className="my-link" to='/blog' onClick={clickMenu}>
            <div>我的博客</div>
            <div className="en">MY BLOG</div>
          </NavLink>
        </div>
        <div className="menu-right">
          <NavLink className="my-link" to='/origami' onClick={clickMenu}>
            <div>我的折纸</div>
            <div className="en">MY ORIGAMI</div>
          </NavLink>
        </div>
        <div className="menu-bottom">
          <NavLink className="my-link" to='/novel' onClick={clickMenu}>
            <div>我的小说</div>
            <div className="en">MY LIGHT NOVEL</div>
          </NavLink>
        </div>

        <div className="menu-about">
          <NavLink className="my-link-small" to='/about' onClick={clickMenu}>
            <div>关于</div>
            <div className="en">ABOUT</div>
          </NavLink>
        </div>

        <div className="menu-exit">
          <div className="my-link-small" onClick={clickMenu} style={{ cursor: 'pointer' }}>
            <div>退出</div>
            <div className="en">EXIT</div>
          </div>
        </div>
      </div>

      <div className="drawer-footer">
        AntD + React ©2021 ~ Now Created by Yuany 
      </div>

    </div>
  )
}) as FC
