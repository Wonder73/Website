import Vue from 'vue'
import Router from 'vue-router'
import allNews from '@/components/manage/allNews'
import publish from '@/components/manage/publish'
import changePwd from '@/components/manage/changePwd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/allNews',
      name: 'allNews',
      component: allNews
    },
    {
      path: '/publish',
      name: 'publish',
      component: publish
    },
    {
      path: '/changePwd',
      name: 'changePwd',
      component: changePwd
    },
    {
      path:'*',
      redirect:'/allNews'
    }
  ],
  linkActiveClass:"active"
})
