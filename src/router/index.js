import Vue from 'vue'
import Router from 'vue-router'
import ZenMusic from '@/components/ZenMusic'
import NoMusic from "@/components/NoMusic";
import ZenBoard from "@/components/ZenBoard";

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
      path: '/NoMusic',
      name: 'NoMusic',
      component: NoMusic
    },
    {
      path: '/ZenBoard',
      name: 'ZenBoard',
      component: ZenBoard
    }
  ]
})
