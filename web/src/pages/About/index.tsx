import { FC } from 'react'
import './index.scss'

export default (() => {
  return (
    <div data-component="about" className="box-shadow">
      <div>我是谁？</div>
      <div className="hidden">暂时不告诉你(∀｀*ゞ)ｴﾍﾍ</div>
    </div>
  )
}) as FC
