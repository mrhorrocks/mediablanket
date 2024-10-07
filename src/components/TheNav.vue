<script setup>
//
</script>

<template>
  <nav class="app-nav">
    <div class="app-nav__logo">
      <!-- LOGO -->
    </div>
    <ul>
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/about">About</RouterLink></li>
    </ul>
  </nav>
</template>

<style lang="scss">
@import '@/assets/scss/partials/colours';
//
.app-nav {
  background-color: lighten($medium-grey, 100%);
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  &__logo {
    background-color: lighten($medium-grey, 60%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
  }
  ul {
    display: flex;
    li {
      display: flex;
    }
    a {
      color: black;
      text-transform: uppercase;
      background-color: lighten($medium-grey, 60%);
      padding: 1rem;
      text-decoration: none;
      font-size: 0.75rem;
      border-left: 1px solid white;
      transition: 0.25s;
      &:hover {
        color: white;
        background-color: lighten($medium-grey, 40%);
      }
    }
  }
}
</style>
