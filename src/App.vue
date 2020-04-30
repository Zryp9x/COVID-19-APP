<template>
  <div class="container">
    <nav class="navbar-brand">
        <img class="img" @click="$router.push('/').catch(err =>{})" src="https://img.icons8.com/nolan/64/coronavirus.png" style="margin-right:10px;">
        <button @click="$router.push('/countries').catch(err =>{})" type="button" class="btn btn-outline-dark">Countries</button>
        <button @click="$router.push('/info').catch(err =>{})" type="button" class="btn btn-outline-dark">Info</button>
        <button @click="$router.push('/news').catch(err =>{})" type="button" class="btn btn-outline-dark">News</button>
        <button @click="$router.push('/authors').catch(err =>{})" type="button" class="btn btn-outline-dark">Authors</button>
        <button @click="$router.push('/').catch(err =>{})" type="button" class="btn btn-outline-dark">Login</button>
        <button @click="$router.push('/register').catch(err =>{})" type="button" class="btn btn-outline-dark">Register</button>
        <br><br>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
</script>
