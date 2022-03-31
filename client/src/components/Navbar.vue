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
      <li class="nav__item" v-if="currentUser">
        <button class="nav__link" @click="logOut">Sign Out</button>
      </li>
      <li class="nav__item" v-if="currentUser">
        <router-link class="nav__link" :to="{ name: 'CreateList' }"
          >Create list</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { useLoggedInUserStore } from '../store/userStore.js';

const { setUser, setAuth, user } = useLoggedInUserStore();

const currentUser = ref(null);

currentUser.value = user;

const logOut = () => {
  setUser({});
  setAuth(false);
};
</script>

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
