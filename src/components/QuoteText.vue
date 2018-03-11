<template>
<div>
<h3 class="title is-5 is-spaced quote"><slot></slot></h3>
<h5 class="subtitle is-5 is-spaced">SWAMI CHINMAYANDA</h5>
</div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.quote{
  line-height: 2rem;
}
h3{
  margin-left: 256px;
  margin-right: 256px;
}

@media screen and (max-width: 768px){
  h3{
    margin-left: 16px;
    margin-right: 16px;
  }
}
</style>
