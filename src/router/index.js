import { createRouter, createWebHistory } from 'vue-router'
import BasicMathView from '../views/BasicMathView.vue'
import StringAppView from '../views/StringAppView.vue'
import HomeView from '../views/Home.vue'
import VuetifyView from '../views/VuetifyView.vue'
import AxiosQuizView from '../views/AxiosQuiz.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/stringApp',
      name: 'StringAppView',
      component: StringAppView
    },
    {
    path: '/basicMath',
    name: 'basicMath',
    component: BasicMathView
    },
    {
      path: '/axiosQuiz',
      name: 'axiosQuiz',
      component: AxiosQuizView
      },
    {
      path: '/vuetify',
      name: 'vuetify',
      component: VuetifyView
      },

  ]
})

export default router
