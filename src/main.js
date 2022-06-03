import { createApp } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';

import HomeScreen from './Screens/LandingScreen.vue'
import RepairScreen from './Screens/RepairScreen.vue'
import AboutScreen from './Screens/AboutScreen.vue'
import TeamScreen from './Screens/TeamScreen.vue'
import ReceiptScreen from './Screens/ReceiptScreen.vue'

const routes = [
    { path: '/', name: "Home", component: HomeScreen },
    { path: '/booking', name: "Repair Booking", component: RepairScreen },
    { path: '/about', name: "About", component: AboutScreen },
    { path: '/team', name: "Team", component: TeamScreen },
    { path: '/receipt', name: "Booking Confirmation", component: ReceiptScreen },
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: routes,
})

createApp(App)
.use(router)
.use(BootstrapVue3)
.component('v-select', vSelect)
.mount('#app')
