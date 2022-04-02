export interface Post {
  _id?: string
  title: string
  author: string
  content: string
  type: Param
  tags: Param[]
}

export interface Param {
  _id?: string
  typeId: number
  title: string
  remark: string
}
