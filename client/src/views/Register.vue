<template>
  <main class="main">
    <div class="container">
      <h1>Register</h1>
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
import { useRouter } from 'vue-router';

const router = useRouter();

const email = ref('');
const password = ref('');
const user = ref(null);

const saveUser = async () => {
  const newUser = {
    email: email.value,
    password: password.value
  };

  user.value = await createUser(newUser);
  router.push({ name: 'Login' });
};
</script>

<style lang="scss" scoped></style>
