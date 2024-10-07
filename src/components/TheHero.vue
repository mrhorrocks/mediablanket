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
          <h1 class="dongle-bold">
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
          <div class="homepage-hero__icons">
            <div>
              <!-- Tick Icon -->
            </div>
            <div>
              <!-- Tick Icon -->
            </div>
            <div>
              <!-- Tick Icon -->
            </div>
          </div>
        </div>

        <!-- CALCULATOR AREA-->
        <div class="homepage-hero__quote-input">
          <h2 class="dongle-bold">How much would you <br />like to borrow?</h2>
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
@import '@/assets/scss/partials/type';
//
.homepage-hero {
  background-color: $hero-bg;
  border-radius: 1rem;
  box-shadow: 0px 4px 10px #cbcbcb;
  > div {
    display: flex;
    flex-direction: column;
  }
  h1 {
    span {
      color: darken($green, 10%);
      font-size: clamp(5rem, 8vw, 7rem);
      text-shadow: 0px 2px black;
    }
    font-family: Dongle;
    color: $medium-grey;
    font-size: clamp(3rem, 6vw, 4rem);
    text-align: center;
    margin: 1rem 0;
    line-height: 3rem;
    @media (min-width: 768px) {
      text-align: left;
    }
  }
  h2 {
    font-family: Dongle;
    color: $medium-grey;
    font-size: clamp(2rem, 5vw, 3rem);
    line-height: 2rem;
    text-align: center;
    margin: 2rem 0 0;
  }
  &__hero-car-container {
    background-color: transparent;
    display: flex;
    justify-content: center;
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
    padding: 1rem 1rem;
    border-bottom: 1px solid #dae8ff;
    @media (min-width: 768px) {
      border-right: 1px solid #dae8ff;
    }
    @media (min-width: 1024px) {
      padding: 1rem 2rem;
    }
  }
  &__quote-input {
    padding: 0 3rem;
    margin: 2rem;
    background-color: lighten($first-colour, 33%);
    border-radius: 6rem 0rem 5rem 0rem;
  }
  &__icons {
    display: flex;
    justify-content: space-evenly;
    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      background-color: lighten($medium-grey, 60%);
      border-radius: 50%;
      background: url('/img/tick.png') 50% 50% / 70% no-repeat transparent;
    }
  }
}
</style>
