<template>
  <div class="hello">
      <h1>{{ msg }}</h1>
      <av-line
      :line-width="2"
      line-color="#7BD9BD"
      audio-src="https://open.spotify.com/track/1LYipMFKz8X6fNU7RJvvVW"
      ></av-line>
      <!-- https://open.spotify.com/track/1LYipMFKz8X6fNU7RJvvVW -->
    </div>
</template>

<script>
  export default {
    name: 'ZenMusic',
      data () {
        return {
          msg: 'Meditate with Music'
          }
      }
  }
</script>

<style scoped>

</style>
