import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  {
    path: '/destination/:id/:slug',
    name: 'destination.show',
    component: () => import('@/views/DestinationShow.vue'),
    props: route => ({ ...route.params, id: parseInt(route.params.id) }),
    children: [
      {
        path: '/destination/:id/:slug/:experienceSlug',
        name: 'experience.show',
        component: () => import('@/views/ExperienceShow.vue'),
        props: route => ({ ...route.params, id: parseInt(route.params.id) }),
      }
    ]
  },
  {
    path: ' /:pathMatch(.*) *',  // '/: pathMatch(.*)* ' 
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue')
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
