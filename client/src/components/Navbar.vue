<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item">
        <router-link
          class="nav__link"
          v-if="!store.isAuth"
          :to="{ name: 'Register' }"
          >Register</router-link
        >
      </li>
      <li class="nav__item">
        <router-link
          class="nav__link"
          v-if="!store.isAuth"
          :to="{ name: 'Login' }"
          >Login</router-link
        >
      </li>
      <li class="nav__item" v-if="store.isAuth">
        <button class="nav__link nav__link-btn" @click="logOut">
          Sign Out
        </button>
      </li>
      <li class="nav__item" v-if="store.isAuth">
        <router-link class="nav__link" :to="{ name: 'CreateList' }"
          >Create list</router-link
        >
      </li>
      <li class="nav__item" v-if="store.isAuth">
        <router-link class="nav__link" :to="{ name: 'UserHome' }"
          >My Lists</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { useLoggedInUserStore } from '../store/userStore.js';

const store = useLoggedInUserStore();

store.$subscribe(() => {
  console.log(store.isAuth);
});

const logOut = () => {
  store.setUser(null);
  store.setAuth(false);
  localStorage.removeItem('token');
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
    font-size: 1.2rem;
    color: $darkCyan;

    &.router-link-exact-active {
      font-weight: bold;
    }
  }

  &__link-btn {
    background: transparent;
    border: 1px solid $primaryDarkCyan;
    border-radius: 5px;
    padding: 5px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
