import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import WorkView from './views/WorkView.vue'
import FrontendView from './views/FrontendView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: HomeView,
      name: 'home',
      path: '/'
    },
    {
      component: AboutView,
      name: 'about',
      path: '/about'
    },
    {
      component: WorkView,
      name: 'work',
      path: '/work'
    },
    {
      component: FrontendView,
      name: 'frontend',
      path: '/frontend'
    }
  ]
})
