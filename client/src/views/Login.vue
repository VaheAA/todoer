<template>
  <main class="main">
    <div class="container">
      <AuthForm
        v-model:inputEmail="email"
        v-model:inputPassword="password"
        title="Login"
        btnText="Login"
        @handleSubmit="saveUser"
      />
    </div>
  </main>
</template>

<script setup>
import AuthForm from '../components/AuthForm.vue';
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
