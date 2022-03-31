<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__brand">
          <router-link class="header__brand-logo" :to="{ name: 'Home' }"
            >TODOER</router-link
          >
        </div>
        <Navbar />
      </div>
    </div>
  </header>
</template>

<script setup>
import Navbar from './Navbar.vue';
</script>

<style lang="scss">
.header {
  background-color: $bgLightCyan;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  max-width: 100%;
  padding: 10px 0;
  z-index: 100;

  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__brand {
    &-logo {
      color: $darkCyan;
      font-size: 2rem;
      letter-spacing: 2;
      font-weight: bold;
    }
  }
}
</style>
