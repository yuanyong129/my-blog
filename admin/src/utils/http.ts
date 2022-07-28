import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'
import { url } from '@/config'
import { getToken } from './auth'
import { IResponseType } from '@/types'

export const http = axios.create({
  baseURL: url,
  timeout: 3 * 1000
})



const request = async<T = any> (config: AxiosRequestConfig): Promise<IResponseType<T>> => {
  try {
    const { data } = await http.request<IResponseType<T>>(config)
    return data
  } catch (err: any) {
    const msg = err.message || '请求失败'
    return { code: -1, msg, data: null as any }
  }
}

// 请求拦截器
http.interceptors.request.use(
  (req: AxiosRequestConfig) => {
    if (req.url) {
      if(req.url.indexOf('login') < 0 && req.url.indexOf('register') < 0) {
        if(req.headers) {
          req.headers['Authorization'] = `Bearer ${getToken()}`
        }
      }
    }
    return req
  },
  (err: any) => {
    console.log('req err', err)
  }
)
// 响应拦截器
http.interceptors.response.use(
  (res: AxiosResponse) => {
    if (res.status === 200 || res.status === 201) {
      return res
    } else {
      window.$message.error(res.data.msg)
      return res
    }
  },
  (err: any) => {
    const { message : errMsg } = err.response.data
    console.log(errMsg)
  }
)

export default request