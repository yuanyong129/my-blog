import router from './router'
import { getToken } from './utils/auth'
import { getMenu } from '@/api'

const whilteList = [ '/login', '/register' ]

router.beforeEach(async (to, from, next) => {

  // if(whilteList.includes(to.path)) {
  //   next()
  // } else {}
  if (getToken()) {
    if (to.path === '/login') {
      next('/')
    } else {
      const res = await getMenu()
      console.log('menu', res)
      next()
    }
    // next()
  } else {
    if(whilteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
