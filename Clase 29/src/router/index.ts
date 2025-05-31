import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../App.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/Layout/LandingLayout.vue'),
      children: [
        {
          path: '',
          name: 'Side',
          component: () => import('@/Layout/Side.vue'),
        },
        // {
        //   path: 'register',
        //   name: 'register',
        //   component: () => import('@/views/RegisterView.vue'),
        // },
      ],
    },
  ],
})

export default router
