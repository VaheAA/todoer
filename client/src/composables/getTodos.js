import { ref } from 'vue';
import { $authHost } from '../api';

export const getLists = async (listId) => {
  const todos = ref(null);

  const { data } = await $authHost.get(`api/todo?listId=${userId}`);
  todos.value = data;
  return todos.value;
};
