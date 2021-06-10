import React, { Component, Suspense, lazy, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'

export default class ContentView extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Suspense fallback={ <div className="text-primary" style={{ textAlign: 'center' }}>正在加载中...</div> }>
            <Route exact path="/" component={lazy(() => import('@/pages/Home'))}></Route>
            <Route path="/blog" component={lazy(() => import('@/pages/Post'))}></Route>
            <Route path="/blogdetails" component={lazy(() => import('@/pages/Post/PostDetails'))}></Route>
            <Route path="/novel" component={lazy(() => import('@/pages/Novel'))}></Route>
          </Suspense>
        </Switch>
      </Fragment>
    )
  }
}
