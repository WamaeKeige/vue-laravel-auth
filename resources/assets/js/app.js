
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import axios from 'axios';
import Dashboard from './components/Dashboard.vue';
import Home from './components/Home.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';
import VueAxios from 'vue-axios';
import VueAuth from '@websanova/vue-auth';
axios.defaults.baseURL = 'http://localhost:8000/api';
Vue.use(VueRouter);
Vue.use(VueAxios, axios);

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
            meta: {
             auth: false
         }
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
             auth: true
          }
        }]
});
Vue.use(require('@websanova/vue-auth'), {
    auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
    http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
    router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
});
Vue.router=router


App.router = Vue.router
new Vue(App).$mount('#app');

Vue.router=router

new Vue({
    el: '#app',
    template: '<App/>',
    router,
    components: { App }
}).$mount('#app')
