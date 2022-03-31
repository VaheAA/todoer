import { ref } from 'vue';
import { $host, $authHost } from '../api';

export const createUser = async (user) => {
  const error = ref(null);

  error.value = null;
  try {
    const response = await $host.post('api/user/register', user);
    return response;
  } catch (err) {
    error.value = err;
  }
};
