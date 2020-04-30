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
import CountryInfo from './CountryInfo.vue';
import News from './News.vue';
import axios from "axios";
import Register from './Register.vue';
import Logout from './Logout.vue';

import * as firebase from 'firebase/app';
import "firebase/auth";

Vue.prototype.$axios = axios;

const firebaseConfig = {
    apiKey: "AIzaSyC8dlPZsdBcgkmuQ9R3KMCisvFIdF1qpPk",
    authDomain: "covid19user-89923.firebaseapp.com",
    databaseURL: "https://covid19user-89923.firebaseio.com",
    projectId: "covid19user-89923",
    storageBucket: "covid19user-89923.appspot.com",
    messagingSenderId: "296919306217",
    appId: "1:296919306217:web:9fc13679158317b1090578",
    measurementId: "G-435Q7EL7S8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


Vue.use(VueRouter);

const routes = [
    {path: '/', name:'home', component: Home},
    {path: '/countries', name:'countries', component: Countries, meta: { requiresAuth: true }},
    {path: '/app', component: App, meta: { requiresAuth: true }},
    {path: '/authors', component: Authors},
    {path: '/CountryInfo/:CountryCode', component: CountryInfo},
    {path: '/info', component: Info, meta: { requiresAuth: true }},
    {path: '/news', component: News, meta: { requiresAuth: true }},
    {path: '/register', name:'register', component: Register},
    {path: '/logout', name:'logout', component: Logout}
];

const router = new VueRouter({
    routes,
    mode: 'hash',
    mode: "history",
    base: process.env.BASE_URL,
});

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const isAuthenticated = firebase.auth().currentUser;
    console.log("isauthenticated", isAuthenticated);
    if (requiresAuth && !isAuthenticated) {
      next("/");
    } else {
      next();
    }
  });

export default router;

let app;


firebase.auth().onAuthStateChanged(user => {
    console.log("user", user);
    if (!app) {
        app = new Vue({
            el: '#app',
            router,
            render: h => h(App)
        });
    }});
