/* eslint-disable prettier/prettier */
export interface ResponseType<T = any> {
  code: number
  msg: string
  data: T
}
