<template>
<div>
<h3 class="title is-5 is-spaced" :style="{fontSize: size + 'rem'}"><slot></slot></h3>
<h5 class="subtitle is-5 is-spaced">SWAMI CHINMAYANDA</h5>
</div>
</template>

<script>
export default {
  props: ['size']
}
</script>


<style scoped>
h3, h5 {
  line-height: 2em;
}
</style>
