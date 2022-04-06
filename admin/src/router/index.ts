import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Login from '@/views/auth/Login/index.vue'
import Layout from '@/layout/index.vue'
import { nextTick } from 'vue'
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
    component: Layout
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