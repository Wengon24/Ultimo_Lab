import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../Layout/LandingLayout.vue'),
      children: [
        {
          path: '', 
          name: 'proyect',
          component: () => import('../views/Proje.vue'),
        },
      ],
    },
  ],
})

export default router

