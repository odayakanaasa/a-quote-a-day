<template>
<p class="subtitle is-5 has-text-dark">
{{year}}.{{String(month).padStart(2, '0')}}.{{String(day).padStart(2, '0')}}
</p>
</template>

<script>
export default {
  props: ['year', 'month', 'day']
}
</script>
