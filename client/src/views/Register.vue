<template>
  <main class="main">
    <div class="container">
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
import { createUser } from '../composables/useUser.js';

const email = ref('');
const password = ref('');

const saveUser = async () => {
  const newUser = {
    email: email.value,
    password: password.value
  };
  await createUser(newUser);
};
</script>

<style lang="scss" scoped></style>
