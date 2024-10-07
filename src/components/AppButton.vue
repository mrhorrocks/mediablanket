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
  <button class="app-button">
    <slot>{{ text }}</slot>
  </button>
</template>

<style lang="scss">
@import '@/assets/scss/partials/colours';
button.app-button {
  display: flex;
  justify-content: center;
  color: #fff;
  background-color: #3b82f6;
  width: 200px;
  padding: 1rem;
  margin: 2rem auto;
  text-align: center;
  text-transform: uppercase;
  border-radius: 1.25rem;
  border: 0;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    background-color: darken($green, 20%);
  }
  //
  @media (min-width: 576px) {
    width: 280px;
  }
}
</style>
