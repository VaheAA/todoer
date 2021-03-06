import axios from 'axios';
const API_URL = import.meta.env.VITE_APP_API_URL;

const $host = axios.create({
  baseURL: API_URL
});

const $authHost = axios.create({
  baseURL: API_URL
});

const authInterceptor = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
};

$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };
