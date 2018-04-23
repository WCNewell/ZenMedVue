<template>
  <div class="hello">
      <h1>{{ msg }}</h1>
        <div id="audio-player">
          <av-line
          :line-width="2"
          line-color="#7BD9BD"
          audio-src='/static/Last Kiss ARTY.mp3'
          ></av-line>
      </div>
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
#audio-player {
  margin: 3rem;
}
</style>
