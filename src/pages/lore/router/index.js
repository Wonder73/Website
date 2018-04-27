import Vue from 'vue'
import Router from 'vue-router'
import flag from '@/components/lore/flag';       //团旗
import emblem from '@/components/lore/emblem';   //团徽
import song from '@/components/lore/song';      //团歌
import oath from '@/components/lore/oath';      //入团誓言
import chapter from '@/components/lore/chapter';      //团章

Vue.use(Router)

export default new Router({
  // mode:'history',
  routes: [
    {
      path: '/flag',
      name: 'flag',
      component: flag
    },
    {
      path: '/emblem',
      name: 'emblem',
      component: emblem
    },
    {
      path: '/oath',
      name: 'oath',
      component: oath
    },
    {
      path: '/song',
      name: 'song',
      component: song
    },
    {
      path: '/chapter',
      name: 'chapter',
      component: chapter
    },
    {
      path:'*',
      redirect:'/flag'
    }
  ],
  linkActiveClass:"active"
})
