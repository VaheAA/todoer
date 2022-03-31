import { $host, $authHost } from '../api';

const loginUser = async (user) => {
  error.value = null;
  try {
    const response = await $host.post('api/user/login', user);
    return response;
  } catch (err) {
    error.value = err;
  }
};

const checkUser = async (user) => {
  error.value = null;
  try {
    const response = await $host.post('api/user/auth', user);
    return response;
  } catch (err) {
    error.value = err;
  }
};

export { loginUser, checkUser };
