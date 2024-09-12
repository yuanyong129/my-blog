import { http } from '@/utils'
import { ILoginForm, IPost } from '@/types'

export const login = (data: ILoginForm) => 
  http<string>({
    url: 'auth/login',
    method: 'POST',
    data
  }) // 登录

export const getPostsApi = (params: any) => 
  http<{
    list: IPost[],
    total: number,
    totalAll: number
  }>({
    url: 'post',
    method: 'GET',
    params
  }) // 获取帖子