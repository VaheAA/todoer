import { $host, $authHost } from '../api';
import jwtDecode from 'jwt-decode';

const loginUser = async (user) => {
  try {
    const { data } = await $host.post('api/user/login', user);
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
  } catch (err) {
    alert(err);
  }
};

const checkUser = async (user) => {
  try {
    const { data } = await $authHost.get('api/user/auth', user);
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
  } catch (err) {
    alert(err);
  }
};

export { loginUser, checkUser };
