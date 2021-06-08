import Vue from 'vue'
import vueRouter from 'vue-router'

Vue.use(vueRouter)

// 引入布局组件
import Layout from '@/layout'

// 静态路由
export const constantRoutes = [
  {
    path: '/login',
    hidden: true,
    component: () => import('@/views/Login/'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/register',
    hidden: true,
    component: () => import('@/views/Login/Register'),
    meta: {
      title: '退出登录'
    }
  },
  {
    path : '/',
    component: Layout,
    redirect: '/index',
    meta: {
      title: '主页',
      icon: 'el-icon-location'
    },
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
    path: '/post',
    component: Layout,
    redirect: 'post/index',
    meta: {
      title: '帖子中心',
      icon: 'el-icon-menu'
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/Post'),
        meta: {
          title: '帖子管理'
        }
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    redirect: '/user/index',
    meta: {
      title: '用户中心',
      icon: 'el-icon-s-tools'
    },
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