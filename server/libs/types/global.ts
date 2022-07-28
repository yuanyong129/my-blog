/* eslint-disable prettier/prettier */
/** 自定义返回类型 */
export interface IResponseType<T = any> {
  code: number
  msg: string
  data: T
}
