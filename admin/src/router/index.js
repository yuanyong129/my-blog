import Vue from 'vue'
import vueRouter from 'vue-router'

Vue.use(vueRouter)

// 引入布局组件
import Layout from '@/layout'

// 静态路由
export const constantRoutes = [
  {
    path : '/login',
    component: () => import('@/views/Login/'),
  },
  {
    path: '/register',
    component: () => import('@/views/Login/Register')
  },
  {
    path : '/',
    component: Layout,
    redirect: '/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/Home/'),
        meta: {
          title: '主页'
        }
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    redirect: '/user/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/User/'),
        meta: {
          title: '用户管理'
        }
      },
      {
        path: 'role',
        component: () => import('@/views/User/Role'),
        meta: {
          title: '角色管理'
        }
      },
      {
        path: 'menu',
        component: () => import('@/views/User/Menu'),
        meta: {
          title: '菜单管理'
        }
      }
    ]
  }
]

// 动态路由
export const asyncRoutes = []


const createRouter = () =>
  new vueRouter({
    mode: 'history', // require service support
    // base: '/',
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

const router = createRouter()

// 重置路由
export function resetRouter() {
  const newRouter = createRouter()
  // console.log('matcher', newRouter.matcher)
  router.matcher = newRouter.matcher // reset router
}

export default router