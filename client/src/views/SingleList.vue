<template>
  <main class="main">
    <div class="container">
      <div class="list__inner" v-if="!isLoading">
        <h2 class="list__title">{{ currentList.name }}</h2>
        <ul class="list__items">
          <TodoItem
            v-for="todo in todos.rows"
            :text="todo.text"
            :complete="todo.done"
            :key="todo.id"
            @click="markAsComplete(todo.id)"
          />
        </ul>
        <div class="list__tools">
          <button class="btn" @click="isOpen = !isOpen">Add new Todo</button>

          <div class="list__pagination">
            <button
              @click="setPage(page)"
              class="btn pagination__btn"
              :class="{ 'pagination__btn--active': page === currentPage }"
              v-for="page in pages"
              :key="page"
            >
              {{ page }}
            </button>
          </div>
        </div>
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
import { getTodos } from '../composables/getTodos';

import AddTodo from '../components/AddTodo.vue';
import TodoItem from '../components/TodoItem.vue';

const route = useRoute();
const currentList = ref(null);
const isLoading = ref(true);
const todoName = ref('');
const done = ref(false);
const isOpen = ref(false);
const todos = ref(null);
const currentTodo = ref(null);
const currentPage = ref(1);
const limit = ref(5);
const pagesCount = ref();
const pages = ref([]);

const markAsComplete = (id) => {
  currentTodo.value = todos.value.find((todo) => todo.id === id);
  currentTodo.value.done = !currentTodo.value.done;
};

const setPage = async (page) => {
  currentPage.value = page;
  todos.value = await getTodos(route.params.id, limit.value, currentPage.value);
};

const handleSubmit = async () => {
  const newTodo = {
    text: todoName.value,
    done: done.value,
    listId: route.params.id
  };
  await createTodo(newTodo);
  done.value = false;
  isOpen.value = false;
  todoName.value = '';
  todos.value = await getTodos(route.params.id, limit.value, currentPage.value);
  console.log(todos.value.count);
};

const countPages = () => {
  pagesCount.value = Math.ceil(todos.value.count / limit.value);
  for (let i = 0; i < pagesCount.value; i++) {
    pages.value.push(i + 1);
  }
};

onMounted(async () => {
  currentList.value = await getSingleList(route.params.id);
  todos.value = await getTodos(route.params.id, limit.value, currentPage.value);
  countPages();
  if (currentList.value) isLoading.value = false;
});
</script>

<style lang="scss">
.list__inner {
  max-width: 800px;
  min-height: 450px;
  margin: 0 auto;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
  padding: 1rem;
}

.list__title {
  margin-bottom: 1.5rem;
  font-size: 2rem;
  color: $veryDarkCyan;
}

.list__items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  min-height: 450px;
}

.list__tools {
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btn {
  width: 180px;
  padding: 0.55rem 0.25rem;
  background-color: $primaryDarkCyan;
  border: none;
  font-size: 1.1rem;
  border-radius: 5px;
  cursor: pointer;
  color: $bgLightCyan;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
}

.list__pagination {
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  max-width: 200px;
}
.pagination__btn {
  width: 30px;
}
.pagination__btn--active {
  background-color: $veryDarkCyan;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
