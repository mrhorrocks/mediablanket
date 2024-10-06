<script setup>
// Props definition
const props = defineProps({
  text: {
    type: String,
    required: true,
    default: 'Add text prop'
  }
})
</script>

<template>
  <button class="button">
    <slot>{{ text }}</slot>
  </button>
</template>

<style lang="scss">
button {
  border: 0;
}
</style>
