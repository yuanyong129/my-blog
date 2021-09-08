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
    component: () => import('@/views/auth/Login'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/register',
    hidden: true,
    component: () => import('@/views/auth/Register'),
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
        component: () => import('@/views/home/Home'),
        meta: {
          title: '主页'
        }
      }
    ]
  },
  {
    path : '/basic',
    component: Layout,
    redirect: '/basic/type',
    meta: {
      title: '基础数据管理',
      icon: 'el-icon-info'
    },
    children: [
      {
        path: 'type',
        component: () => import('@/views/basic/TypeManage'),
        meta: {
          title: '基础类型'
        }
      },
      {
        path: 'param',
        hidden: true,
        component: () => import('@/views/basic/ParamManage'),
        meta: {
          title: '基础参数'
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
        component: () => import('@/views/post/Post'),
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
        component: () => import('@/views/user/User'),
        meta: {
          title: '用户管理'
        }
      },
      {
        path: 'role',
        component: () => import('@/views/user/Role'),
        meta: {
          title: '角色管理'
        }
      },
      {
        path: 'menu',
        component: () => import('@/views/user/Menu'),
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