import Vue from 'vue'
import Router from 'vue-router'
import ZenMusic from '@/components/ZenMusic'
import DailyQuote from "@/components/DailyQuote"
import ZenBoard from "@/components/ZenBoard"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "./",
      redirect: {
        name: "App"
      }
    },
    {
      path: '/ZenMusic',
      name: 'ZenMusic',
      component: ZenMusic
    },
    {
      path: '/DailyQuote',
      name: 'DailyQuote',
      component: DailyQuote
    },
    {
      path: '/ZenBoard',
      name: 'ZenBoard',
      component: ZenBoard
    }
  ]
})
