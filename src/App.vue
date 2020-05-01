<template>
  <div class="container">
    <nav class="navbar-brand">
        <img class="img" @click="$router.push('/home').catch(err =>{})" src="https://img.icons8.com/nolan/64/coronavirus.png" style="margin-right:10px;">
        <button @click="$router.push('/countries').catch(err =>{})" type="button" class="btn btn-outline-dark" v-if="this.$route.path !== '/' && this.$route.path !== '/register'">Countries</button>
        <button @click="$router.push('/info').catch(err =>{})" type="button" class="btn btn-outline-dark" v-if="this.$route.path !== '/' && this.$route.path !== '/register'">Info</button>
        <button @click="$router.push('/news').catch(err =>{})" type="button" class="btn btn-outline-dark" v-if="this.$route.path !== '/' && this.$route.path !== '/register'">News</button>
        <button @click="$router.push('/authors').catch(err =>{})" type="button" class="btn btn-outline-dark" v-if="this.$route.path !== '/' && this.$route.path !== '/register'">Authors</button>
        <button @click="$router.push('/').catch(err =>{})" type="button" class="btn btn-outline-dark" v-if="this.$route.path !== '/countries' && this.$route.path !== '/info' && this.$route.path !== '/countryinfo' && this.$route.path !== '/news' && this.$route.path !== '/authors' && this.$route.path !== '/home'">Login</button>
        <button @click="$router.push('/register').catch(err =>{})" type="button" class="btn btn-outline-dark" v-if="this.$route.path !== '/countries' && this.$route.path !== '/info' && this.$route.path !== '/countryinfo' && this.$route.path !== '/news' && this.$route.path !== '/authors' && this.$route.path !== '/home'">Register</button>
        <br><br>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
</script>
