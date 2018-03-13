<template>
  <div id="app" class="center-in-grid">
    
    <DateText class="Date" :year="year" :month="month" :day="day"/>

    <TheQuoteText class="Quote" :size="quoteSize">{{quote}}</TheQuoteText>
    
    <section class="Buttons">
      <BulmaButton :onClick="prevQuote">
        <span class="icon">
          <i class="fas fa-angle-left"></i>
        </span>
        <span>prev</span>
      </BulmaButton>
      <BulmaButton :onClick="todayQuote"  :style="{ visibility: todayQuoteButtonVisibility }">
        <span>today</span>
      </BulmaButton>
      <BulmaButton :onClick="nextQuote">
        <span>next</span>
        <span class="icon">
          <i class="fas fa-angle-right"></i>
        </span>
      </BulmaButton>
    </section>

  </div>
</template>

<script>
import TheQuoteText from './components/TheQuoteText'
import BulmaButton from './components/BulmaButton'
import DateText from './components/DateText'

import quotes from './quotes'

export default {
  name: 'App',
  components: {
    TheQuoteText,
    BulmaButton,
    DateText
  },
  mounted() {
    alert("this isn't complete")
  },
  data() {
    return {
      month: 1, //(new Date).getMonth() + 1,
      day: 1, //(new Date).getDate(),
    }
  },
  computed: {
    quote() {
      return quotes[this.month - 1][this.day - 1]
    },
    todayQuoteButtonVisibility() {
      return this.month == (new Date).getMonth() + 1 && this.day == (new Date).getDate() ? 'hidden' : 'visible'
    },
    quoteSize() {

      // size in terms of rem
      let size = 1.5
      const num_words = this.quote.split(' ').length

      switch (true) {
        case num_words > 20:
          size = 1.2
          break;
        case num_words > 10:
          size = 1.5
          break;
        default:
          size = 1.9
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
    todayQuote() {
      this.month = (new Date).getMonth() + 1
      this.day = (new Date).getDate()
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

$white: #ECF0F1;
$dark: #2C3A47;

$primary: $dark;

@import url('https://cdnjs.cloudflare.com/ajax/libs/IBM-type/0.5.4/css/ibm-type.min.css');
$monospace: 'IBM Plex Mono', monospace;

$family-primary: $monospace;

@import "~bulma/sass/utilities/_all.sass";
@import "~bulma/sass/base/_all.sass";
/*import elements, grid, components, and then layout (in that order)*/
@import "~bulma/sass/elements/button.sass";
@import "~bulma/sass/elements/icon.sass";
@import "~bulma/sass/elements/other.sass";
@import "~bulma/sass/elements/title.sass";
@import "~bulma/sass/layout/_all.sass";

html {
  background-color: $white;
}

#app {
  text-align: center;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
}

.Date, .Quote, .Buttons {
  padding-top: 16px;
  padding-bottom: 16px;
  @media screen and (min-width: 1024px){
    padding-top: 32px;
    padding-bottom: 32px;
  }
}

.Quote {
  padding: 16px;
}

</style>
