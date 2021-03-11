import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Home from '@/pages/Home'
import Details from '@/pages/Details'
import Recommend from "@/pages/Recommend";
import Data from '@/pages/Data'
import User from '@/pages/User'

Vue.use(Router);

export default new Router({
    routes: [
        {path: '/login', name: 'Login', component: Login},
        {path: '/', redirect: '/login'},
        {path: '/home', name: 'Home', component: Home},
        {path: '/details', name: 'Details', component: Details},
        {path: '/recommend', name: 'Recommend', component: Recommend},
        {path: '/data', name: 'Data', component: Data},
        {path: '/user', name: 'User', component: User}
    ]
})
