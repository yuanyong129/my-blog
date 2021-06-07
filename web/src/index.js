import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.scss'
import 'antd/dist/antd.css' // 引入ant-design样式
import App from './App'


ReactDOM.render(
  // <React.StrictMode>
    <App />,
  // </React.StrictMode>,
  document.getElementById('root')
)

