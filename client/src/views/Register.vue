<template>
  <main class="main">
    <div class="container">
      <AuthForm
        v-model:inputEmail="email"
        v-model:inputPassword="password"
        title="Register"
        btnText="Register"
        @handleSubmit="saveUser"
      />
    </div>
  </main>
</template>

<script setup>
import AuthForm from '../components/AuthForm.vue';

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
