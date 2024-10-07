<script setup>
import { ref } from 'vue'

// Props definition
const props = defineProps({
  id: {
    type: String,
    required: true
  },
  min: {
    type: String,
    default: '0'
  },
  max: {
    type: String,
    default: '100'
  },
  step: {
    type: String,
    default: '1'
  },
  label: {
    type: String,
    required: true,
    default: 'Add Label'
  },
  prefix: {
    type: String,
    required: false
  },
  suffix: {
    type: String,
    required: false
  }
})

// Reactive data
const rangeValue = ref(1000)

// Methods
const updateValue = () => {
  // The rangeValue is automatically updated by v-model
}
</script>

<template>
  <div class="range-input">
    <label :for="id">{{ label }}</label>
    <input
      type="range"
      :id="id"
      :name="id"
      :min="min"
      :max="max"
      :step="step"
      v-model="rangeValue"
      @input="updateValue"
    />
    <span class="updated-value">{{ prefix }} {{ rangeValue }} {{ suffix }}</span>
  </div>
</template>

<style lang="scss">
/*
"src\assets\scss\partials\_hero-sliders.scss"
*/
</style>
