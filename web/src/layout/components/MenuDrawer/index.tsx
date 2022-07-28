import { FC, useState, useEffect, CSSProperties } from 'react'
import { NavLink } from 'react-router-dom'
import PubSub from 'pubsub-js'
import { PUBSUB } from '@/utils'
import './index.scss'


let pubsubToken: string

export default (() => {

  const [ drawerStyle, setDrawerStyle ] = useState<CSSProperties>({
    right: '-110%'
  })

  const showDrawer = (collapsed: boolean) => {
    if (!collapsed) {
      setDrawerStyle({
        right: '-10%'
      })
    } else {
      setDrawerStyle({
        right: '-110%'
      })
    }
  }
  
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
  }, [])

  return (
    <div data-component="menu-drawer" style={drawerStyle}>
      <NavLink className="my-link" to='/' onClick={clickMenu}>
        <div>首页</div>
        <div className="en">HOME</div>
      </NavLink>
      <NavLink className="my-link" to='/blog' onClick={clickMenu}>
        <div>我的博客</div>
        <div className="en">MY BLOG</div>
      </NavLink>
      <NavLink className="my-link" to='/novel' onClick={clickMenu}>
        <div>我的小说</div>
        <div className="en">MY LIGHT NOVEL</div>
      </NavLink>
      <NavLink className="my-link" to='/origami' onClick={clickMenu}>
        <div>我的折纸</div>
        <div className="en">MY ORIGAMI</div>
      </NavLink>
      <NavLink className="my-link" to='/about' onClick={clickMenu}>
        <div>关于</div>
        <div className="en">ABOUT</div>
      </NavLink>
    </div>
  )
 
}) as FC

