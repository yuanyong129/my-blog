import axios from 'axios'
import { message as Message } from 'antd'
import { getToken } from './auth'

const ip = 'http://192.168.1.107:3080/blog/'
const http = axios.create({
  baseURL: ip,
  timeout: 3000
})
// 请求拦截器
http.interceptors.request.use(
  req => {
    if (req.url.indexOf('login') < 0 && req.url.indexOf('register') < 0) {
      req.headers['Authorization'] = `Bearer ${getToken()}`
    }
    return req
  },
  err => {
    console.log('req err', err)
  }
)
// 响应拦截器
http.interceptors.response.use(
  res => {
    if (res.data.state !== 200) {
      Message.error(res.data.message)
    } else {
      return res.data
    }
  },
  err => {
    if(err.response) {
      const { message } = err.response.data
      Message.error(message)
    } else {
      Message.error('无法连接服务器')
    }
    
    // console.log(message)
  }
)

export default http