import { http } from '@/utils'
import { LoginForm, Post } from '@/types'

export const login = (data: LoginForm) => 
  http<string>({
    url: 'auth/login',
    method: 'POST',
    data
  }) // 登录

export const getPostsApi = (params: any) => 
  http<{
    list: Post[],
    total: number,
    totalAll: number
  }>({
    url: 'post',
    method: 'GET',
    params
  }) // 获取帖子