<template>
  <div id="app">
    <img src="./assets/zen-garden1.jpg">
      <h1>Welcome to Zen Garden</h1>
        <router-link to="/ZenMusic">
          <button type="button" class="btn btn-primary">Music</button>
        </router-link>
        <router-link to="/NoMusic">
          <button type="button" class="btn btn-warning">Silence</button>
        </router-link>
        <router-link to="/ZenBoard">
          <button type="button" class="btn btn-danger">Zenboard</button>
        </router-link>
    <router-view/>
  </div>
</template>

<script>
// import router from './router'

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
button {
  margin: 1rem;
}
</style>
