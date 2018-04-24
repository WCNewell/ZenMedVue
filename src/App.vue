<template>

  <div id="app">

    <img src="./assets/zen-garden1.jpg">
      <h1>Welcome to Zen Garden</h1>
        <div id='nav-buttons'>
        <router-link to="/" class="btn btn-info">Home</router-link>
        <router-link to="/ZenMusic" class="btn btn-primary">Music</router-link>
        <router-link to="/NoMusic" class="btn btn-warning">Silence</router-link>
        <router-link to="/ZenBoard" class="btn btn-danger">Zenboard</router-link>
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
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  /* -webkit-font-smoothing: antialiased; */
  /* -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  /* color: #2c3e50; */
  margin-top: 60px;
}
h1 {
  margin: 2rem;
}
img {
  height: 300px;
  width: auto;
}
#nav-buttons {
  padding: .75rem;
}
</style>
