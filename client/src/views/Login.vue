<template>
  <main class="main">
    <div class="container">
      <h1>Login</h1>
      <form class="form" @submit.prevent="saveUser">
        <div class="form-group">
          <label> Email:</label>
          <input type="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label> Password:</label>
          <input type="password" v-model="password" />
        </div>
        <button>Register</button>
      </form>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import { loginUser } from '../composables/loginUser.js';
import { useLoggedInUserStore } from '../store/userStore.js';
import { useRouter } from 'vue-router';

const router = useRouter();

const { setUser, setAuth } = useLoggedInUserStore();

const email = ref('');
const password = ref('');
const user = ref(null);

const saveUser = async () => {
  const newUser = {
    email: email.value,
    password: password.value
  };
  user.value = await loginUser(newUser);
  if (user.value) {
    setUser(user.value);
    setAuth(true);
    router.push({ name: 'Home' });
  }
};
</script>

<style lang="scss" scoped></style>
