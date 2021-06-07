import React, { Component, Suspense, lazy, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'

export default class ContentView extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Suspense fallback={ <div className="text-primary" style={{ textAlign: 'center' }}>正在加载中...</div> }>
            <Route path="/home" component={lazy(() => import('@/pages/Home'))}></Route>
            <Route path="/user/index" component={lazy(() => import('@/pages/userCenter/User'))}></Route>
            <Route path="/user/role" component={lazy(() => import('@/pages/userCenter/Role'))}></Route>
          </Suspense>
        </Switch>
      </Fragment>
    )
  }
}
