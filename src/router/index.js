import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ManufacturersView from '@/views/ManufacturersView.vue'
import TractorModelView from '@/views/TractorModelView.vue'
import PropertiesView from '@/views/PropertiesView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/models',
    name: 'Modeller',
    component: TractorModelView
  },
  {
    path: '/manufacturers',
    name: 'Fabrikater',
    component: ManufacturersView
  },
  {
    path: '/properties',
    name: 'Detaljer',
    component: PropertiesView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
