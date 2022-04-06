import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Login from '@/views/auth/Login.vue'
import Layout from '@/layout/index.vue'
import Home from '@/views/home/Home.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  console.log('router guard')
  next()
})

export default router