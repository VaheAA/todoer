import { ref } from 'vue';
import { $host, $authHost } from '../api';
import jwtDecode from 'jwt-decode';

export const createUser = async (user) => {
  const error = ref(null);

  error.value = null;
  try {
    const { data } = await $host.post('api/user/register', user);
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
  } catch (err) {
    error.value = err;
  }
};
