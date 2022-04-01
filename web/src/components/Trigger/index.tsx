import { FC, useState, useEffect } from 'react'
import PubSub from 'pubsub-js'
import { PUBSUB } from '@/utils'
import './index.scss'

interface PropsType {
  margin: string
  color: string
}

export default (({
  margin,
  color
}) => {
  const [collapsed, setCollapsed] = useState<boolean>(true)
  let pubSubToken: any = null

  const onTrigger = () => {
    PubSub.publish(PUBSUB.OPENDRAWER, !collapsed)
    setCollapsed(!collapsed)
  }

  useEffect(() => {
    pubSubToken = PubSub.subscribe(PUBSUB.CLOSEDRAWER, (msg) => {
      if (msg === PUBSUB.CLOSEDRAWER) onTrigger()
    })
    return () => {
      PubSub.unsubscribe(pubSubToken)
    }
  })

  return (
    <div
      className={collapsed ? '' : 'active'}
      data-component="trigger" onClick={onTrigger}
      style={{ margin: margin || '0' }}
    >
      <span style={{backgroundColor: color || '#ffffff'}}></span>
      <span style={{backgroundColor: color || '#ffffff'}}></span>
      <span style={{backgroundColor: color || '#ffffff'}}></span>
    </div>
  )
}) as FC<PropsType>
