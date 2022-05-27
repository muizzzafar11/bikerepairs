import { createApp } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import HomeScreen from './Screens/LandingScreen.vue'
import RepairScreen from './Screens/RepairScreen.vue'
import AboutScreen from './Screens/AboutScreen.vue'
import TeamScreen from './Screens/TeamScreen.vue'

const routes = [
    { path: '/', name: "Home", component: HomeScreen },
    { path: '/repair', name: "Repair", component: RepairScreen },
    { path: '/about', name: "About", component: AboutScreen },
    { path: '/team', name: "Team", component: TeamScreen },
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: routes,
})

createApp(App)
.use(router)
.use(BootstrapVue3)
.mount('#app')
