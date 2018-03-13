<template>
<div>
  <h5 class="title is-5 is-spaced has-text-dark" :style="{fontSize: size + 'rem'}"><slot></slot></h5>
  <h6 class="subtitle is-6 has-text-dark">SWAMI CHINMAYANDA</h6>
</div>
</template>

<script>
export default {
  props: ['size']
}
</script>

<style lang="scss" scoped>
@import url('https://rsms.me/inter/inter-ui.css');
$sans-serif: 'Inter UI', sans-serif;

h5, h6 {
  font-family: $sans-serif;
  line-height: 2em;
}
</style>
