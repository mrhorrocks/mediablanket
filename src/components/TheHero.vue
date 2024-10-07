<script setup>
// USE ROUTER
import { useRouter } from 'vue-router'
const router = useRouter()

// FORM REDIRECT
const submitForm = () => {
  // Perform any form validation or submission logic here

  // Redirect to another page
  router.push('/quotes')
}

// COMPONENTS
import AppButton from './AppButton.vue'
import AmountRangeInput from './AmountRangeInput.vue'
import PeriodRangeInput from './PeriodRangeInput.vue'
</script>

<template>
  <section>
    <div class="container">
      <div class="homepage-hero grid md:cols-2">
        <div class="homepage-hero__title-area">
          <h1>
            <span>Get a Car</span>
            <br />
            Finance Deal Today
          </h1>

          <!-- TITLE AREA -->
          <div class="homepage-hero__hero-car-container">
            <div class="homepage-hero__hero-car">
              <!-- Car picture -->
            </div>
          </div>
        </div>

        <!-- CALCULATOR AREA-->
        <div class="homepage-hero__quote-input">
          <h2>How much would you <br />like to borrow?</h2>
          <!-- FORM -->
          <form @submit.prevent="submitForm">
            <AmountRangeInput
              id="loanamount"
              min="1000"
              max="20000"
              step="500"
              label="Loan Amount"
              prefix="£"
              suffix=""
            />
            <PeriodRangeInput
              id="loanperiod"
              min="0"
              max="36"
              step="6"
              label="Loan Period"
              prefix=""
              suffix=" months"
            />
            <AppButton text="Get Quotes" />
          </form>
          <!-- FORM -->
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import '@/assets/scss/partials/colours';
//
.homepage-hero {
  background-color: $hero-bg;
  border-radius: 1rem;
  box-shadow: 0px 4px 10px #cbcbcb;
  > div {
    display: flex;
    flex-direction: column;
    // justify-content: space-between;
  }
  h1 {
    color: $medium-grey;
    font-size: clamp(2rem, 4vw, 2.3rem);
    text-align: center;
    margin: 1rem 0;
    @media (min-width: 768px) {
      text-align: left;
    }
    span {
      color: $first-colour;
      font-weight: bold;
      font-size: clamp(3rem, 5vw, 2.5rem);
      text-shadow: 0px 2px black;
    }
  }
  h2 {
    color: $medium-grey;
    font-size: clamp(1rem, 9vw, 1.5rem);
    text-align: center;
    margin: 1rem 0;
    // font-weight: bold;
  }
  &__hero-car-container {
    background-color: transparent;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #dae8ff;
    @media (min-width: 768px) {
      border: 0px;
    }
  }
  &__hero-car {
    margin-top: 2rem;
    background: url('/img/car1.png') bottom / 100% no-repeat transparent;
    max-width: 475px;
    width: calc(100% - 0rem);
    aspect-ratio: 16 / 8;
    padding: 0 2rem;
  }
  &__title-area {
    padding: 0 2rem;
    @media (min-width: 768px) {
      border-right: 1px solid #dae8ff;
    }
  }
  &__quote-input {
    padding: 0 3rem;
  }
}
</style>
