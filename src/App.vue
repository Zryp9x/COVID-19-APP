<template>
  <div class="container" style=" width: 100%;">

    <header class="header">
    
        <img class="img" @click="$router.push('/home').catch(err =>{})" src="https://img.icons8.com/nolan/64/coronavirus.png">
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
        <ul class="menu"> 
          <li> 
            <button @click="$router.push('/countries').catch(err =>{})" type="button" class="btn btn-outline-dark" style="margin-top: 15px; margin-right: 5px;" v-if="this.$route.path !== '/' && this.$route.path !== '/register'">Countries</button>
          </li>
          <li> 
            <button @click="$router.push('/info').catch(err =>{})" type="button" class="btn btn-outline-dark" style="margin-top: 15px; margin-right: 5px;" v-if="this.$route.path !== '/' && this.$route.path !== '/register'">Info</button>
          </li>
          <li> 
            <button @click="$router.push('/news').catch(err =>{})" type="button" class="btn btn-outline-dark" style="margin-top: 15px; margin-right: 5px;" v-if="this.$route.path !== '/' && this.$route.path !== '/register'">News</button>
          </li>
          <li> 
            <button @click="$router.push('/authors').catch(err =>{})" type="button" class="btn btn-outline-dark" style="margin-top: 15px; margin-right: 5px;" v-if="this.$route.path !== '/' && this.$route.path !== '/register'">Authors</button>
          </li>
          <li> 
            <button @click="$router.push('/').catch(err =>{})" type="button" class="btn btn-outline-dark" style="margin-top: 15px; margin-right: 5px;" v-if="this.$route.path !== '/countries' && this.$route.path !== '/info' && this.$route.path !== '/countryinfo' && this.$route.path !== '/news' && this.$route.path !== '/authors' && this.$route.path !== '/home'">Login</button>
          </li>
          <li> 
            <button @click="$router.push('/register').catch(err =>{})" type="button" class="btn btn-outline-dark" style="margin-top: 15px; margin-right: 5px;" v-if="this.$route.path !== '/countries' && this.$route.path !== '/info' && this.$route.path !== '/countryinfo' && this.$route.path !== '/news' && this.$route.path !== '/authors' && this.$route.path !== '/home'">Register</button>
          </li>
          <li> 
            <button @click="$router.push('/').catch(err =>{})" type="button" class="btn btn-outline-dark" style="margin-top: 15px; margin-right: 5px;" v-if="this.$route.path !== '/' && this.$route.path !== '/register'"><logout></logout></button>
          </li>
        </ul>
        </header>

    <router-view></router-view>
  </div>
</template>

<script>

import Logout from './Logout';
export default {
        components: {'logout': Logout},
}
</script>
