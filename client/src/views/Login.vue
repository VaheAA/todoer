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
  setUser(user.value);
  setAuth(true);
};
</script>

<style lang="scss" scoped></style>
