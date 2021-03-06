import { ref } from 'vue';
import { $authHost } from '../api';

export const createTodo = async (todo) => {
  const error = ref(null);

  error.value = null;
  try {
    const { data } = await $authHost.post('api/todo', todo);
    return data;
  } catch (err) {
    error.value = err;
  }
};

export const deleteTodo = async (id) => {
  const { data } = await $authHost.delete(`api/todo/${id}`);
  return data;
};
