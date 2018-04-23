<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
      <!-- <button type="button" class="btn btn-outline-primary">Primary</button>
      <button type="button" class="btn btn-outline-secondary">Secondary</button>
      <button type="button" class="btn btn-outline-success">Success</button>
      <button type="button" class="btn btn-outline-info">Info</button>
      <button type="button" class="btn btn-outline-warning">Warning</button>
      <button type="button" class="btn btn-outline-danger">Danger</button> -->
      <div class="form-group">
      <button class="btn btn-outline-primary" @click.prevent="playSound('/static/Cicada-SoundBible.com-99344226.mp3')">Cicadas</button>
    <br>
    <label>
      <button class="btn btn-outline-secondary" @click.prevent="playSound('http://soundbible.com/mp3/Elevator Ding-SoundBible.com-685385892.mp3')"><span class="fa fa-play-circle-o"></span></button>
      Play Elevator Ding
    </label>
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
        playSound (sound) {
          if(sound) {
          var audio = new Audio(sound);
          audio.play();
          }
        }
      }
  }
  
</script>

<style scoped>

</style>