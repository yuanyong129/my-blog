import axios from 'axios'
import Vue from 'vue'
import { Message } from 'element-ui'
import { getToken } from './auth'

const ip = process.env.NODE_ENV === 'production' ? process.env.VUE_APP_BASE_URl :  'http://localhost:3000/frame/'
const http = axios.create({
  baseURL: ip,
  timeout: 3000
})

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

http.interceptors.response.use(
  res => {
    if (res.data.state !== 200) {
      Message({
        message: res.data.message,
        type: 'error'
      })
    } else {
      return res.data
    }
  },
  err => {
    const { message } = err.response.data
    Message({
        message: message,
        type: 'error'
      })
    return {}
  }
)

Vue.prototype.$http = http
export default http