<template>
  <template v-if="!isLoading">
    <Header />
    <router-view></router-view>
  </template>
  <h1 style="margin-top: 100px" v-else>Loading...</h1>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Header from './components/Header.vue';
import { useRouter } from 'vue-router';
import { useLoggedInUserStore } from './store/userStore.js';
import { checkUser } from './composables/loginUser.js';

const isLoading = ref(false);
const error = ref(null);
const store = useLoggedInUserStore();

const router = useRouter();

store.$subscribe(() => {
  if (!store.isAuth) router.push({ name: 'Login' });
});

onMounted(() => {
  isLoading.value = false;
  if (localStorage.getItem('token')) {
    checkUser()
      .then((data) => {
        if (data) {
          isLoading.value = true;
          store.setUser(data);
          store.setAuth(true);
        } else {
          router.push({ name: 'Home' });
        }
      })
      .catch((err) => (error.value = err.message))
      .finally(() => (isLoading.value = false));
  } else {
    router.push({ name: 'Home' });
  }
});
</script>

<style></style>
