<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
      <button type="button" class="btn btn-outline-primary">Primary</button>
      <button type="button" class="btn btn-outline-secondary">Secondary</button>
      <button type="button" class="btn btn-outline-success">Success</button>
      <button type="button" class="btn btn-outline-info">Info</button>
      <button type="button" class="btn btn-outline-warning">Warning</button>
      <button type="button" class="btn btn-outline-danger">Danger</button>
  </div>
</template>

<script>
  export default {
    name: 'ZenBoard',
      data () {
        return {
          msg: 'Zenboard'
            }
        }
    }
</script>

<style scoped>

</style>