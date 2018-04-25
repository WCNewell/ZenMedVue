<template>
  <div id="app">
    <img src="./assets/zen-garden1.jpg">
      <h1>ZenMed</h1>
      <div>
        <router-link button to="/" style='margin: 2rem' class="btn btn-info">Home</router-link>
        <router-link to="/ZenMusic" style='margin: 2rem' class="btn btn-primary">Music</router-link> 
        <router-link to="/NoMusic" style='margin: 2rem' class="btn btn-warning">Silence</router-link>
        <router-link to="/ZenBoard" style='margin: 2rem' class="btn btn-danger">Zenboard</router-link>
      </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}
h1 {
  margin: 2rem;
}
img {
  height: 300px;
  width: auto;
}
</style>
