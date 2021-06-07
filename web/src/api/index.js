import http from '../utils/http'

export const login = data => http.post('auth/login', data) // 登录接口
export const register = data => http.post('auth/register', data) // 注册、添加用户
export const initUsers = params => http.get('users', { params }) // 初始化接口