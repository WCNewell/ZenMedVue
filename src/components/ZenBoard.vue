<template>
  <div>
    <h1>Zenboard</h1>
    <span class='soundboard'>
      <div id='sound-button' v-for='(sound, index) in sounds' :key='index'>
        <button @click='play(sound.audio)' type='button' class='btn btn-outline-primary'>{{ sound.name }}</button>
      </div>
    </span> 
  </div>
</template>

<script>
  export default {
    name: 'ZenBoard',
      data () {
        return {
          sounds: [
            { name: 'Cicadas',
              audio: null,
              path: '/static/Cicada-SoundBible.com-99344226.mp3'},
            { name: 'Atmosphere',
              audio: null,
              path: '/static/sumo_blanco_Atmosphere_event_horizon_12.mp3'},
            { name: 'Rainforest',
              audio: null,
              path: '/static/rainforest_ambience-GlorySunz-1938133500.mp3'},
            { name: 'Taiko Drums',
              audio: null,
              path: '/static/ftus_musical_taiko_drums_performance_chants_japan_199.mp3'},
            { name: 'Ocean',
              audio: null,
              path: '/static/Crisp_Ocean_Waves-Mike_Koenig-1486046376.mp3'},
            { name: 'Drone',
              audio: null,
              path: '/static/sumo_blanco_Atmosphere_highlander_15.mp3'},
            { name: 'Choir',
              audio: null,
              path: '/static/musical_heavenly_choir_002.mp3'},
            { name: 'Crickets',
              audio: null,
              path: '/static/Summer-Crickets-Chirping_SoundBible.com-1519333525.mp3'}
          ]
        }
      },
      mounted () {
        this.sounds.forEach((sound => {
          sound.audio = new Audio
          sound.audio.src = sound.path
        }))
      },
      methods: {
        play(sound) {
          if (sound.paused) {
            sound.play() 
            } else {
            sound.pause() 
          }
        }
      }
  }
</script>

<style scoped>
.soundboard {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  /* align-content: space-between; */
}
#sound-button {
  padding: .75rem;
}
</style>