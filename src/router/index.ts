import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import rootPage from '@/App.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Root',
    component: rootPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
