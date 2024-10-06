<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheNav from './components/TheNav.vue'
</script>

<template>
  <div class="wrapper container">
    <TheNav />
  </div>

  <main>
    <RouterView />
  </main>
</template>

<style lang="scss">
//
</style>
