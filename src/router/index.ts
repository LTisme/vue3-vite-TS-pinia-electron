import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import 主页 from '../views/主页显示内容页面.vue'
import 洗牌 from '../views/使用loadsh进行洗牌.vue'
<<<<<<< HEAD
import 色块瀑布 from '../views/色块瀑布.vue'
=======
>>>>>>> 700352379e0c7d0fcd3e208246fd6ec8ad522965

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '主页',
      component: 主页,
    },
    {
      path: '/shuffle',
      name: '洗牌',
      component: 洗牌,
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/waterFall',
      name: '色块瀑布',
      component: 色块瀑布,
    },
  ],
})

export default router
