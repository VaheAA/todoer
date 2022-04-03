import { ref } from 'vue';
import { $authHost } from '../api';

export const getTodos = async (listId, limit, page) => {
  const todos = ref(null);

  const { data } = await $authHost.get(
    `api/todo?listId=${listId}&limit=${limit}&page=${page}`
  );
  todos.value = data;
  return todos.value;
};
