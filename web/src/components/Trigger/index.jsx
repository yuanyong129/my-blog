import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import { PUBSUB } from '@/utils'
import './index.scss'

export default class Trigger extends Component {
  state = {
    collapsed: true
  }
  pubSubToken = null

  onTrigger = () => {
    const { collapsed } = this.state
    PubSub.publish(PUBSUB.OPENDRAWER, !collapsed)
    this.setState({ collapsed: !collapsed })
  }

  componentDidMount() {
    this.pubSubToken = PubSub.subscribe(PUBSUB.CLOSEDRAWER, (msg) => {
      if (msg === PUBSUB.CLOSEDRAWER) this.onTrigger()
    })
    // window.onresize = () => {
    //   const width = document.getElementById('root').clientWidth
    //   if (width > 720 && !this.state.collapsed) {
    //     this.onTrigger()
    //   }
    // }
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.pubSubToken)
  }

  render() {
    return (
      <div
        className={this.state.collapsed ? '' : 'active'}
        data-component="trigger" onClick={this.onTrigger}
        style={{ margin: this.props.margin || '0' }}
      >
        <span style={{backgroundColor: this.props.color || '#ffffff'}}></span>
        <span style={{backgroundColor: this.props.color || '#ffffff'}}></span>
        <span style={{backgroundColor: this.props.color || '#ffffff'}}></span>
      </div>
    )
  }
}
