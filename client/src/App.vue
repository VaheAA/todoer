<template>
  <Header />
  <div class="container" v-if="!isLoading">
    <router-view></router-view>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Header from './components/Header.vue';
import { useRouter } from 'vue-router';
import { useLoggedInUserStore } from './store/userStore.js';
import { checkUser } from './composables/loginUser.js';

const isLoading = ref(true);
const { setUser, setAuth } = useLoggedInUserStore();

const router = useRouter();

onMounted(async () => {
  await checkUser()
    .then((data) => {
      if (data) {
        setUser(data);
        setAuth(true);
      } else {
        router.push({ name: 'Login' });
      }
    })
    .finally((isLoading.value = false));
});
</script>

<style></style>
