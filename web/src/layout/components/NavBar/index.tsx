import { FC } from 'react'
import { Trigger } from '@/components'
import Logo from '../Logo'
import './index.scss'

export default (() => {
  return (
    <div data-component="navbar">
      <div className="nav-bar">
        <div className="phone-nav flex-row">
          <Logo />
          <Trigger color="skyblue" margin="0 10px" />
        </div>
      </div>
    </div>
  )
}) as FC
