<template>
  <div class="hello">
      <h1>{{ msg }}</h1>
      <av-line
      :line-width="2"
      line-color="#7BD9BD"
      audio-src='/static/sumo_blanco_Atmosphere_event_horizon_12.mp3'
      ></av-line>
      <!-- <audio-player :sources='audioSources' :loop='true'></audio-player> -->
    </div>
</template>

<script>
import AudioPlayer from './audio-player.vue'
  export default {
    components: {
      AudioPlayer
    },
    name: 'ZenMusic',
      data () {
        return {
          msg: 'Meditate with Music',
          audioSources: [
            '/static/Arty-LastKiss.m4p'
          ]
          }
      }
  }
</script>

<style scoped>

</style>
