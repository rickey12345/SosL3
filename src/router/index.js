import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/routes/main.js'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
