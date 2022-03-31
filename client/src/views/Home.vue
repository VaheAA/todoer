<template>
  <main class="main">
    <div class="home">
      <div class="container">
        <h1 class="main-title">Your todo lists</h1>
        <ul class="lists">
          <ListItem v-for="list in lists" :key="list" :title="list.id" />
        </ul>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import ListItem from './ListItem.vue';

const lists = ref([
  {
    id: '1'
  },
  {
    id: '2'
  },
  {
    id: '3'
  },
  {
    id: '4'
  },
  {
    id: '5'
  },
  {
    id: '6'
  },
  {
    id: '7'
  },
  {
    id: '8'
  },
  {
    id: '9'
  }
]);
</script>

<style lang="scss">
.main-title {
  text-align: center;
  color: $veryDarkCyan;
  font-size: 3rem;
  margin-bottom: 2rem;
}
.lists {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1rem 0;
  gap: 15px;
}
</style>
