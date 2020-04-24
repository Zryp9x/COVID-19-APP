<template>
  <div class="container">
    <nav class="navbar">
        <img class="img" @click="$router.push('/')" src="/assets/COVID-19 APP.png"><br><br>
        
        <button @click="$router.push('/countries')" type="button" class="btn btn-outline-dark">Państwa</button>
        
        <button  @click="$router.push('/info')" type="button" class="btn btn-outline-dark">Informacje</button>
        
        <button  @click="$router.push('/authors')" type="button" class="btn btn-outline-dark">Authors</button>
        <br><br>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>

</script>
