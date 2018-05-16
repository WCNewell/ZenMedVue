<template>
  <div id="app">
    <!-- <img src="./assets/Buddha1.jpg"> -->
      <h1>ZenMed</h1>
      <div>
        <router-link button to="/" style='margin: 2rem' class="btn btn-info">Home</router-link>
        <router-link to="/ZenMusic" style='margin: 2rem' class="btn btn-primary">Music</router-link> 
        <router-link to="/DailyQuote" style='margin: 2rem' class="btn btn-warning">DailyQuote</router-link>
        <router-link to="/ZenBoard" style='margin: 2rem' class="btn btn-danger">ZenBoard</router-link>
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
body {
    background-image: url('./assets/BuddhaClose.jpg');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    height: 100%;
    background-size: cover;
}

#app {
  color: white;
  text-align: center;
  margin-top: 60px;
}
h1 {
  color: white;
  margin: 2rem;
}
/* img {
  height: 300px;
  width: auto;
} */
</style>
