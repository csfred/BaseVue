import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入自定义样式
import '@/styles/index.less'
import router from '@/router/router.js'

Vue.use(ElementUI)

// 添加导航守卫
router.beforeEach((to, from, next) => {
  // 1. 获取token
  let mytoken = localStorage.getItem('itcast_manager_35_token')
  // 2.判断
  if (mytoken || to.path === '/login') {
    // 下一步调用回归函数
    next()
  } else {
    // 重定向
    next({ path: '/login' })
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
