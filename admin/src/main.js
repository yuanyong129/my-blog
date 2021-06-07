import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入ant-design
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './utils/http'
import './permisson'

import 'normalize.css'
import './styles/index.scss'

import Compage from './components/ComPage/Type1'
Vue.component('compage', Compage)
import Table from './components/Table/'
Vue.component('m-table', Table)

import { setFormOptions } from './utils'
Vue.prototype.$setForm = setFormOptions

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
