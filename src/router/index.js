import Vue from 'vue'
import Router from 'vue-router'
import showblog from '@/components/showblog'
import addblog from '@/components/addblog'
import singleblog from '@/components/singleblog'
import test from '@/components/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/showblog',
      name: 'showblog',
      component: showblog
    },
    {
      path: '/addblog',
      name: 'addblog',
      component: addblog
    },
    {
      path: '/singleblog',
      name: 'singleblog',
      component: singleblog
    },
    {
      path:'/test',
      name:'test',
      component:test
    }
  ],
  mode:'history'//去掉url中的#
})
