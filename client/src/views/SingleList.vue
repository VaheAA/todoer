<template>
  <main class="main">
    <div class="container">
      <div class="list__inner" v-if="!isLoading">
        <h2 class="list__title">{{ currentList.name }}</h2>
        <button class="btn" @click="isOpen = !isOpen">Add new Todo</button>
      </div>
      <transition>
        <AddTodo
          v-if="isOpen"
          title="Add new todo"
          btnText="Save"
          v-model:todoName="todoName"
          v-model:done="done"
          @handleSubmit="handleSubmit"
        />
      </transition>
    </div>
  </main>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { getSingleList } from '../composables/getLists';
import { createTodo } from '../composables/useTodo';
import AddTodo from '../components/AddTodo.vue';

const route = useRoute();
const currentList = ref(null);
const isLoading = ref(true);
const todoName = ref('');
const done = ref(false);
const isOpen = ref(false);

const handleSubmit = async () => {
  const newTodo = {
    text: todoName.value,
    done: done.value,
    listId: route.params.id
  };
  await createTodo(newTodo);
  done.value = false;
  todoName.value = '';
};

onMounted(async () => {
  currentList.value = await getSingleList(route.params.id);
  if (currentList.value) isLoading.value = false;
});
</script>

<style lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
