<template>
  <div id="app">
    <p>{{month}} / {{day}}</p>
    <h3>{{quote}}</h3>
    <button v-on:click="prevQuote">back</button>
    <button v-on:click="nextQuote">forward</button>
  </div>
</template>

<script>
import quotes from './quotes'

export default {
  name: 'App',
  components: {
    
  },
  data() {
    return {
      month: 1,
      day: 3
    }
  },
  computed: {
    quote() {
      return quotes[this.month - 1][this.day - 1]
    }
  },
  methods: {
    prevQuote() {

      this.day--
      
      if(this.day < 1){
        this.month--

        if(this.month < 1){
          this.month = quotes.length
        }

        this.day = quotes[this.month - 1].length
      }
    },
    nextQuote() {
      
      this.day++
      const days_available = quotes[this.month - 1].length
      
      if(this.day > days_available){
        this.day = 1
        this.month++
        const months_available = quotes.length 
      
        if(this.month > months_available){
          this.month = 1
        }
      }
    }
  }
}
</script>
