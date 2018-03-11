<template>
  <div id="app">
    <p class="subtitle is-5">{{year}}.{{String(month).padStart(2, '0')}}.{{String(day).padStart(2, '0')}}</p>
    <QuoteText >{{quote}}</QuoteText> <br>
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

import quotes from './quotes'

export default {
  name: 'App',
  components: {
    QuoteText,
    BulmaButton
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
$yellow: #F8EFBA;
$orange: #FEA47F;
$blue: #25CCF7;
$dark: #2C3A47;
$primary: $dark;

$family-primary: 'IBM Plex Mono';
@import "~bulma/sass/utilities/_all.sass";
@import "~bulma/sass/base/_all.sass";
/*import elements, grid, components, and then layout (in that order)*/
@import "~bulma/sass/elements/box.sass";
@import "~bulma/sass/elements/button.sass";
@import "~bulma/sass/elements/content.sass";
@import "~bulma/sass/elements/image.sass";
@import "~bulma/sass/elements/icon.sass";
@import "~bulma/sass/elements/other.sass";
@import "~bulma/sass/elements/tag.sass";
@import "~bulma/sass/elements/title.sass";
@import "~bulma/sass/grid/columns.sass";
@import "~bulma/sass/components/navbar.sass";
@import "~bulma/sass/components/tabs.sass";
@import "~bulma/sass/components/menu.sass";
@import "~bulma/sass/layout/_all.sass";

html{
  background: $yellow;
}

#app{
  text-align: center;
  margin-top: 128px;
}

#buttons{
  position: fixed;
  bottom: 128px;
  @media screen and (max-width: 768px){
    bottom: 64px;
  }
  left: 0;
  right: 0;
}

</style>
