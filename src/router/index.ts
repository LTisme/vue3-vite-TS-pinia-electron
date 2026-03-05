import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import 主页 from '../views/主页显示内容页面.vue'
import 洗牌 from '../views/使用loadsh进行洗牌.vue'
import 色块瀑布 from '../views/色块瀑布.vue'
import 虚拟dom和diff算法 from '@/views/虚拟dom和diff算法.vue'
import 第6章_Ref全家桶 from '@/views/第6章_Ref全家桶.vue'
import 第7章_Reactive全家桶 from '@/views/第7章_Reactive全家桶.vue'
import 第8章_toRef全家桶 from '@/views/第8章_toRef系列全家桶.vue'



const router = createRouter({
  // history的意思是路由模式，createWebHistory是HTML5模式，createWebHashHistory是Hash模式
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/charpter6',
      name: '第6章',
      component: 第6章_Ref全家桶,
    },
    {
      path: '/charpter7',
      name: '第7章',
      component: 第7章_Reactive全家桶,
    },
    {
      path: '/charpter8',
      name: '第8章',
      component: 第8章_toRef全家桶,
    },
    {
      path: '/dom&diff',
      name: 'dom&diff',
      component: 虚拟dom和diff算法,
    },
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
