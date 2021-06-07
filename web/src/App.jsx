import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from './layout'
import Login from './pages/auth/Login'
import Resgister from './pages/auth/Register'

class App extends Component  {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/register" component={Resgister} />
            <Route path="/login" component={Login} />
            <Route path="/" component={Layout} />
          </Switch>
        </BrowserRouter>
      </div>
    ) 
  }
}

export default App
