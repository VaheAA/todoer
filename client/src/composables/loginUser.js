import { $host, $authHost } from '../api';
import { ref } from 'vue';
import jwtDecode from 'jwt-decode';

const loginUser = async (user) => {
  const error = ref(null);

  try {
    error.value = null;
    const { data } = await $host.post('api/user/login', user);
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
  } catch (err) {
    error.value = err.message;
  }
};

const checkUser = async (user) => {
  const error = ref(null);

  try {
    const { data } = await $authHost.get('api/user/auth', user);
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
  } catch (err) {
    error.value = err.message;
  }
};

export { loginUser, checkUser };
