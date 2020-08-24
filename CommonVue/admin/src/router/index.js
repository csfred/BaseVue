import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App'
    },
    {
      path: '/partners',
      name: 'Partners', 
      component: () => import('@/views/Partners')
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: () => import('@/components/HelloWorld')
    }
  ]
});