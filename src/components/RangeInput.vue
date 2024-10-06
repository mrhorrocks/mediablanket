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
const rangeValue = ref(0)

// Methods
const updateValue = () => {
  // The rangeValue is automatically updated by v-model
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/partials/colours';

.range-input {
  position: relative;
  z-index: 0;
}

label {
  width: 100%;
  display: inline-block;
  padding: 10px 0;
}

.updated-value {
  width: 100%;
  display: inline-block;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
}

/*Range Reset*/
input[type='range'] {
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  cursor: pointer;
  width: 100%;
}

/* Removes default focus */
input[type='range']:focus {
  outline: none;
}

/* Slider track */
input[type='range']::-webkit-slider-runnable-track {
  position: relative;
  z-index: 10;
  height: 0.5rem;
  background-color: #ccc;
  border-radius: 0.5rem;
}

/* Thumb */
input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  margin-top: -14px;
  background-color: white;
  border: 5px solid $first-colour;
  outline: 0px solid white;
  height: 2.25rem;
  width: 2.25rem;
  border-radius: 50%;
  box-shadow: 0px 8px 10px 0px #ccc;

  &:hover {
    background-color: $second-colour;
    border: 5px solid white;
    outline: 5px solid $first-colour;
  }

  &:active {
    background-color: $first-colour;
  }
}

input[type='range']:focus::-webkit-slider-thumb {
  outline-offset: 0rem;
}

/******** Firefox styles ********/
/* slider track */
.range-input {
  position: relative;
  z-index: 0;
}

label {
  width: 100%;
  display: inline-block;
  padding: 10px 0;
}

.updated-value {
  width: 100%;
  display: inline-block;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
}

/*Range Reset*/
input[type='range'] {
  -moz-appearance: none;
  appearance: none;
  background: transparent;
  cursor: pointer;
  width: 100%;
}

/* Removes default focus */
input[type='range']:focus {
  outline: none;
}

/* Slider track */
input[type='range']::-moz-slider-runnable-track {
  position: relative;
  z-index: 10;
  height: 0.5rem;
  background-color: #ccc;
  border-radius: 0.5rem;
}

/* Thumb */
input[type='range']::-moz-slider-thumb {
  -moz-appearance: none;
  appearance: none;
  margin-top: -14px;
  background-color: white;
  border: 5px solid $first-colour;
  outline: 0px solid white;
  height: 2.25rem;
  width: 2.25rem;
  border-radius: 50%;
  box-shadow: 0px 8px 10px 0px #ccc;

  &:hover {
    background-color: $second-colour;
    border: 5px solid white;
    outline: 5px solid $first-colour;
  }

  &:active {
    background-color: $first-colour;
  }
}

input[type='range']:focus::-moz-slider-thumb {
  outline-offset: 0rem;
}
</style>
