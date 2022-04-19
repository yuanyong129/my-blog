// 登录表单
export interface LoginForm {
  username: string
  password: string
}

// 帖子
export interface Post {
  _id?: string
  title: string
  author: string
  content: string
  type: Param
  tags: Param[]
  createdAt: string
  updatedAt: string
}

// 参数
export interface Param {
  _id?: string
  typeId: number
  title: string
  remark: string
  createdAt: string
  updatedAt: string
}
