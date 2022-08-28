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
        path: '/blog',
        component: () => import('@/views/blog/index'),
        meta: {
          title: '博客'
        }
      },
      {
        path: '/message',
        component: () => import('@/views/message/index'),
        meta: {
          title: '留言板'
        }
      },
      {
        path: '/production',
        component: () => import('@/views/production/index'),
        meta: {
          title: '作品集'
        }
      },
      {
        path: '/about',
        component: () => import('@/views/about/index'),
        meta: {
          title: '关于我'
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory('/vue3-blog/'),
  routes
})
router.afterEach(() => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
})
export default router
