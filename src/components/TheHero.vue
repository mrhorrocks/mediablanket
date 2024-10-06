<script setup>
import AppButton from './AppButton.vue'
import RangeInput from './RangeInput.vue'
</script>

<template>
  <section>
    <div class="container">
      <div class="hero grid sm:cols-2">
        <div class="">The Hero</div>
        <div class="">
          <h2>How Much would You Like To Borrow?</h2>
          <RangeInput
            id="loanamount"
            min="0"
            max="20000"
            step="500"
            label="Loan Amount"
            prefix="£"
            suffix=""
          />
          <RangeInput
            id="loanperiod"
            min="0"
            max="36"
            step="6"
            label="Loan Period"
            prefix=""
            suffix=" months"
          />
          <AppButton text="Calculate" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import '@/assets/scss/partials/colours';
//
.hero {
  background-color: red;
}
</style>
