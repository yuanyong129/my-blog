import http from '@/utils/http'
export const usersUrl = 'users'
export const rolesUrl = 'roles'
export const menusUrl = 'menus'
export const loginUrl = 'auth/login'

export const getMenu = () => http.get('auth/menu') // 获取权限菜单
// ↓帖子页面
export const getPost = params => http.get('post', { params }) // 获取帖子
export const addPost = data => http.post('post', data) // 添加帖子
export const updPost = data => http.put('post', data) // 修改帖子
export const delPost = id => http.delete(`post/${id}`) // 删除帖子
// ↑帖子页面