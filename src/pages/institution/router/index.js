import Vue from 'vue'
import Router from 'vue-router'
import institution from '@/components/institution/institution'
import personnel from '@/components/institution/personnel'
import branch from '@/components/institution/branch'

Vue.use(Router)

export default new Router({
  // mode:'history',
  routes: [
    {
      path: '/institution',
      name: 'institution',
      component: institution
    },
    {
      path: '/personnel',
      name: 'personnel',
      component: personnel
    },
    {
      path: '/branch',
      name: 'branch',
      component: branch
    },
    {
      path:'*',
      redirect:'/institution'
    }
  ],
  linkActiveClass:"active"
})
