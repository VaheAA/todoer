import { $authHost } from '../api';
import { ref } from 'vue';

export const createList = async (name) => {
  try {
    const { data } = await $authHost.post('api/list', name);
    return data;
  } catch (err) {
    alert(err);
  }
};
