import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './components/App'
import Dashboard from './components/Dashboard'
import Signin from './components/Signin'

import { firebaseApp } from './firebaseApp'

import store from './store'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/dashboard', component: Dashboard },
        { path: '/signin', component: Signin }
    ]
})

firebaseApp.auth().onAuthStateChanged(user => {
    if(user) {
        store.dispatch('signin', user)
        router.push('/dashboard')
    }
    else {
        router.replace('/signin')
    }
})

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
