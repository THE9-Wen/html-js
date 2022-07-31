import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/Home/home-index.vue')
  },
  {
    path: '/video/:id',
    component: () => import('@/views/Video/video-index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
