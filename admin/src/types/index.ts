// 登录表单
export interface ILoginForm {
  username: string
  password: string
}

// 帖子
export interface IPost {
  _id?: string
  title: string
  author: string
  content: string
  type: IParam
  tags: IParam[]
  createdAt: string
  updatedAt: string
}

// 参数
export interface IParam {
  _id?: string
  typeId: number
  title: string
  remark: string
  createdAt: string
  updatedAt: string
}

// 后端返回类型
export interface IResponseType<T = any> {
  code: number
  msg: string
  data: T
}