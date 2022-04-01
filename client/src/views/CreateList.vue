<template>
  <main class="main">
    <div class="container">
      <AddList
        title="Add new List"
        btnText="Create list"
        v-model:listName="listInput"
        @handleSubmit="handleSubmit"
      />
    </div>
  </main>
</template>

<script setup>
import AddList from '../components/AddList.vue';
import { createList } from '../composables/useList';
import { ref } from 'vue';
import { useLoggedInUserStore } from '../store/userStore';
import { useRouter } from 'vue-router';

const listInput = ref('');
const store = useLoggedInUserStore();
const router = useRouter();

const handleSubmit = async () => {
  const list = {
    name: listInput.value,
    userId: store.user.id
  };
  await createList(list);
  listInput.value = '';
  router.push({ name: 'Home' });
};
</script>

<style lang="scss"></style>
