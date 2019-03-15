import Vue from 'vue'
import Router from 'vue-router'
import dashBoard from '@/pages/index'
import loadingPage from '@/pages/loadingPage'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      redirect:'/loadingPage'
    },
    {
      path:'/loadingPage',
      name:'loadingPage',
      component:loadingPage
    },
    {
      path: '/index',
      name: 'dashBoard',
      component: dashBoard
    }
  ]
})
