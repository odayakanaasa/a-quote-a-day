<template>
<button @click="onClick" class="button is-rounded is-primary is-outlined">
  <slot></slot>
</button>
</template>

<script>
export default {
  props: {
    onClick: {
      type: Function,
      required: true
    }
  }
}
</script>
