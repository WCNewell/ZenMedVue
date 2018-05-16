<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <body id='quote-style'>{{ quote }}</body>
    <body id='quote-style'>{{ "~" + author }}</body>
  </div>
</template>

<script>
  export default {
    name: 'DailyQuote',
        data () {
        return {
          msg: 'DailyQuote',
          quote: '',
          author: ''
            }
        },
        created () {
            const url = 'https://quotes.rest/qod.json?api_key=WYIvXbe1f6_RzkfkFPNy6AeF'
            fetch(url)
            .then(response => response.json())
            .then(result => {
                this.quote = result.contents.quotes[0].quote
                this.author=result.contents.quotes[0].author
                if (this.author === null) {
                    this.author = "Unknown"
                }
                console.log(this.author)})
        }
    }
</script>

<style scoped>
#quote-style {
    color: white;
    display: flex;
    justify-content: center;
}
</style>