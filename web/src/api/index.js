import http from '../utils/http'

export const getPosts = params => http.get('post', { params }) // 登录接口

export const initUsers = () => {}
export const register = () => {}