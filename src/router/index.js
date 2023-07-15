import { createRouter, createWebHashHistory } from 'vue-router'
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
        name: 'blog',
        component: () => import('@/views/blog/index'),
        meta: {
          title: '博客'
        }
      },
      // {
      //   path: '/about',
      //   name: 'about',
      //   component: () => import('@/views/about/index'),
      //   meta: {
      //     title: '关于我'
      //   }
      // },
      {
        path: '/blogcontent',
        name: 'blogcontent',
        props: true,
        component: () => import('@/views/blogContent/index'),
        meta: {
          title: '博客详情'
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
// router.afterEach(() => {
//   document.body.scrollTop = 0
//   document.documentElement.scrollTop = 0
// })
export default router
