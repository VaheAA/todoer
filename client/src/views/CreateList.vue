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

const listInput = ref('');

const handleSubmit = async () => {
  await createList(listInput.value);
};
</script>

<style lang="scss"></style>
