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
import Signup from './Signup.vue';
import Logout from './Logout.vue';
import Signin from './Signin.vue';

import * as firebase from 'firebase/app';
import "firebase/auth";
import './registerServiceWorker'

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
    {path: '/', name:'signin', component: Signin},
    {path: '/home', name:'home', component: Home, meta: { requiresAuth: true }},
    {path: '/countries', name:'countries', component: Countries, meta: { requiresAuth: true }},
    {path: '/app', component: App},
    {path: '/authors', component: Authors, meta: { requiresAuth: true }},
    {path: '/CountryInfo/:CountryCode', component: CountryInfo, meta: { requiresAuth: true }},
    {path: '/info', component: Info, meta: { requiresAuth: true }},
    {path: '/news', component: News, meta: { requiresAuth: true }},
    {path: '/signup', name:'signup', component: Signup, meta: { requiresAuth: false }},
    {path: '/logout', name:'logout', component: Logout}
];

const router = new VueRouter({
    routes,
    mode: 'hash',
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

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;
  console.log("isauthenticated", isAuthenticated);
  if (!requiresAuth && isAuthenticated) {
    next("/home");
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
