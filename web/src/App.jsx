import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Layout from './layout'

class App extends Component  {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </div>
    ) 
  }
}

export default App
