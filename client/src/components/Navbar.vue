<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item">
        <router-link class="nav__link" :to="{ name: 'Register' }"
          >Register</router-link
        >
      </li>
      <li class="nav__item">
        <router-link class="nav__link" :to="{ name: 'Login' }"
          >Login</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script setup></script>

<style lang="scss">
.nav {
  &__list {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &__item {
    padding: 0 0.25rem;
  }
  &__link {
    font-size: 1.5rem;
    color: $darkCyan;

    &.router-link-exact-active {
      font-weight: bold;
    }
  }
}
</style>
