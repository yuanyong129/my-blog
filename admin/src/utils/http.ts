import axios, { 
  AxiosResponse,
  AxiosRequestConfig,
  InternalAxiosRequestConfig
} from 'axios';
import { url } from '@/config';
import { getToken } from './auth';
import { IResponseType } from '@/types';
import { Message } from '@arco-design/web-vue';

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
  (req: InternalAxiosRequestConfig) => {
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
      Message.error(res.data.msg)
      return res
    }
  },
  (err: any) => {
    const { statusCode, message } = err.response.data;
    Message.error(message);
    return {
      code: statusCode,
      msg: message
    };
  }
)

export default request