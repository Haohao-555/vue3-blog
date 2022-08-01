import { createRouter, createWebHistory } from 'vue-router'
import layout from '@/layout/index'

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: layout,
    redirect: '/blog',
    children: [
      {
        path: '/message',
        component: () => import('@/views/message/index')
      },
      {
        path: '/blog',
        component: () => import('@/views/blog/index')
      },
      {
        path: '/production',
        component: () => import('@/views/production/index')
      }

    ]
  }
]

const router = createRouter({
  history: createWebHistory('/vue3-blog/'),
  routes
})

export default router
