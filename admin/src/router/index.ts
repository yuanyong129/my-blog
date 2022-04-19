import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { getToken } from '@/utils'
import Login from '@/views/auth/Login.vue'
import Layout from '@/layout/index.vue'
import Home from '@/views/home/Home.vue'
import Post from '@/views/post/Post.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: Layout,
    children: [
      {
        path: '',
        component: Home
      }
    ]
  },
  {
    path: '/post',
    component: Layout,
    children: [
      {
        path: '',
        component: Post
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from) => {
  const token: string = getToken()
  if (token) {
    if(to.path === '/login')
      return '/'
  } else {
    if(to.path === '/login') return
    else return '/login'
  }
})

export default router