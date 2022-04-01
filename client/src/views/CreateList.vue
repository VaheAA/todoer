<template>
  <main class="main">
    <div class="container">
      <AddList title="Add new List" btnText="Create list" v-model="listInput" />
    </div>
  </main>
</template>

<script setup>
import AddList from '../components/AddList.vue';
import { ref } from 'vue';

const listInput = ref('');
</script>

<style lang="scss"></style>
