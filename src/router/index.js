import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ParlamentaresPDT from '../views/ParlamentaresPDT.vue'
import ParlamentaresPCdoB from '../views/ParlamentaresPCdoB.vue'
import ParlamentaresNOVO from '../views/ParlamentaresNOVO.vue'
import ParlamentaresAVANTE from '../views/ParlamentaresAVANTE.vue'
import ParlamentaresMDB from '../views/ParlamentaresMDB.vue'
import PageNotFound from '../views/PageNotFound.vue'
 
Vue.use(VueRouter)

const routes = [
  {
    path: '*',    
    component: PageNotFound
  },
  {
    path: '/',
    name: 'home',
    component: Home
  },  
  {
    path: '/parlamentaresPCdoB',
    name: 'parlamentaresPCdoB',
    component: ParlamentaresPCdoB
  },
  {
    path: '/parlamentaresNOVO',
    name: 'parlamentaresNOVO',
    component: ParlamentaresNOVO
  },
  {
    path: '/parlamentaresAVANTE',
    name: 'parlamentaresAVANTE',
    component: ParlamentaresAVANTE
  },
  {
    path: '/parlamentaresMDB',
    name: 'parlamentaresMDB',
    component: ParlamentaresMDB
  },
  {
    path: '/parlamentaresPDT',
    name: 'parlamentaresPDT',
    component: ParlamentaresPDT
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
