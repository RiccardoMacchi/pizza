import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Menu from '../views/Menu.vue'
import Storia from '../views/Storia.vue'
import Contatti from '../views/Contatti.vue'
import Prenotazione from '../views/Prenotazione.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/menu', name: 'Menu', component: Menu },
  { path: '/storia', name: 'Storia', component: Storia },
  { path: '/contatti', name: 'Contatti', component: Contatti },
  { path: '/prenotazione', name: 'Prenotazione', component: Prenotazione },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
