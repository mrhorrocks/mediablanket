<script setup>
//
</script>

<template>
  <nav class="app-nav">
    <ul>
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/about">About</RouterLink></li>
      <li><RouterLink to="/test">Test</RouterLink></li>
    </ul>
  </nav>
</template>

<style lang="scss">
@import '@/assets/scss/partials/colours';
//
.app-nav {
  background-color: pink;
  ul {
    display: flex;
    li {
      display: flex;
    }
    a {
      background-color: $blue;
      padding: 1rem;
    }
  }
}
</style>
