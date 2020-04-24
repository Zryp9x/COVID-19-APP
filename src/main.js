/*
$ npm install -g vue-cli
$ vue init webpack-simple my-project
$ cd my-project
$ npm install
$ npm run dev
*/

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Countries from './Countries.vue';
import Home from './Home.vue';
import Info from './Info.vue';
import Authors from './Authors.vue';

Vue.use(VueRouter);

const routes = [
    {path: '/COVID-19-APP/', component: Home},
    {path: '/COVID-19-APP/countries', component: Countries},
    {path: '/COVID-19-APP/app', component: App},
    {path: '/COVID-19-APP/info/:CountryCode', component: Info},
    {path: '/COVID-19-APP/authors', component: Authors}
];

const router = new VueRouter({
    routes,
    mode: 'hash'
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
