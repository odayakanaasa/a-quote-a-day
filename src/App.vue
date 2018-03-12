<template>
  <div id="app" class="center-in-grid">
    
    <DateText class="date" :year="year" :month="month" :day="day"/>

    <QuoteText class="quote" :size="quoteSize">{{quote}}</QuoteText>
    
    <section id="buttons">
      <BulmaButton :onClick="prevQuote">
        <span class="icon">
          <i class="fas fa-angle-left"></i>
        </span>
        <span>Prev</span>
      </BulmaButton>
      <BulmaButton :onClick="nextQuote">
        <span>Next</span>
        <span class="icon">
          <i class="fas fa-angle-right"></i>
        </span>
      </BulmaButton>
    </section>

  </div>
</template>

<script>
import QuoteText from './components/QuoteText'
import BulmaButton from './components/BulmaButton'
import DateText from './components/DateText'

import quotes from './quotes'

export default {
  name: 'App',
  components: {
    QuoteText,
    BulmaButton,
    DateText
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
    },
    quoteSize() {

      // size in terms of rem
      let size = 1.5
      const num_words = this.quote.split(' ').length
      console.log(num_words)

      switch (true) {
        case num_words > 40:
          size = 0.9
          break;
        case num_words > 30:
          size = 1
          break;
        case num_words > 20:
          size = 1.2
          break;
        case num_words > 10:
          size = 1.5
          break;
        default:
          size = 1.5
      }

      return size
    },
    year(){
      return (new Date()).getFullYear()
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

<style lang="scss">
@import "~bulma/sass/utilities/initial-variables";

$orange: #FABE58;
$dark: #2C3A47;

$primary: $dark;
$family-primary: 'IBM Plex Mono';

@import "~bulma/sass/utilities/_all.sass";
@import "~bulma/sass/base/_all.sass";
/*import elements, grid, components, and then layout (in that order)*/
@import "~bulma/sass/elements/button.sass";
@import "~bulma/sass/elements/icon.sass";
@import "~bulma/sass/elements/other.sass";
@import "~bulma/sass/elements/title.sass";
@import "~bulma/sass/layout/_all.sass";

html {
  background-color: $orange;
}

#app {
  text-align: center;
}

#buttons { 
  position: fixed;
  bottom: 128px;
  @media screen and (max-width: 768px){
    bottom: 64px;
  }
  left: 0;
  right: 0;
}

.date {
  position: fixed;
  top: 128px;
  @media screen and (max-width: 768px){
    top: 64px;
  }
  left: 0;
  right: 0;
}

.quote {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  width: 80vw;
  margin-left: 10vw;
  margin-right: 10vw;
}
</style>
