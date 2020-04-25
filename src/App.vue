<template>
  <div class="container">
    <nav class="navbar">
        <img class="img" @click="$router.push('/').catch(err =>{})" src="https://img.icons8.com/nolan/64/coronavirus.png"><br><br>
        
        <button @click="$router.push('/countries').catch(err =>{})" type="button" class="btn btn-outline-dark">Państwa</button>
        
        <button  @click="$router.push('/info').catch(err =>{})" type="button" class="btn btn-outline-dark">Informacje</button>
        
        <button  @click="$router.push('/authors').catch(err =>{})" type="button" class="btn btn-outline-dark">Authors</button>
        <br><br>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>

</script>
