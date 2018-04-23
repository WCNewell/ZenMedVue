<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
      <!-- <button type="button" class="btn btn-outline-primary">Primary</button>
      <button type="button" class="btn btn-outline-secondary">Secondary</button>
      <button type="button" class="btn btn-outline-success">Success</button>
      <button type="button" class="btn btn-outline-info">Info</button>
      <button type="button" class="btn btn-outline-warning">Warning</button>
      <button type="button" class="btn btn-outline-danger">Danger</button> -->
      <div>
        <button v-on:click='play' type='button' class='btn btn-outline-primary'>Cicadas</button>
        <audio ref='audioElement1' src='/static/Cicada-SoundBible.com-99344226.mp3'></audio>
      </div>
      <div>
        <button v-on:click='play' type='button' class='btn btn-outline-secondary'>Crickets</button>
        <audio ref='audioElement' src='/static/Summer Crickets Chirping-SoundBible.com-1519333525.mp3'></audio>
      </div>
      <div>
        <button v-on:click='play' type='button' class='btn btn-outline-success'>Cicadas</button>
        <audio ref='audioElement' src='/static/Cicada-SoundBible.com-99344226.mp3'></audio>
      </div>
      <div>
        <button v-on:click='play' type='button' class='btn btn-outline-info'>Cicadas</button>
        <audio ref='audioElement' src='/static/Cicada-SoundBible.com-99344226.mp3'></audio>
      </div>
      <div>
        <button v-on:click='play' type='button' class='btn btn-outline-warning'>Cicadas</button>
        <audio ref='audioElement' src='/static/Cicada-SoundBible.com-99344226.mp3'></audio>
      </div>
      <div>
        <button v-on:click='play' type='button' class='btn btn-outline-danger'>Cicadas</button>
        <audio ref='audioElement' src='/static/Cicada-SoundBible.com-99344226.mp3'></audio>
      </div> 
  </div>
</template>

<script>
  export default {
    name: 'ZenBoard',
      data () {
        return {
          msg: 'Zenboard'
        }
      },
      methods: {
        play: function(event) {
          const audio = this.$refs.audioElement1
            if (audio.paused) {
            audio.play()
            } else {
            audio.pause()
        }
      }
    }
  }
</script>

<style scoped>

</style>