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
export const getPostById = id => http.get(`post/${id}`) // 根据id查询帖子
// ↑帖子页面

// ↓类型页面
export const getType = params => http.get('types', { params }) // 获取帖子
export const addType = data => http.post('types', data) // 添加帖子
export const updType = data => http.put('types', data) // 修改帖子
export const delType = id => http.delete(`types/${id}`) // 删除帖子
// ↑类型页面

// ↓参数页面
export const getParam = params => http.get('params', { params }) // 获取帖子
export const addParam = data => http.post('params', data) // 添加帖子
export const updParam = data => http.put('params', data) // 修改帖子
export const delParam = id => http.delete(`params/${id}`) // 删除帖子
// ↑参数页面