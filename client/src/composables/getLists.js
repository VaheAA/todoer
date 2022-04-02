import { ref } from 'vue';
import { $host, $authHost } from '../api';

export const getLists = async (userId) => {
  const lists = ref(null);

  const { data } = await $authHost.get(`api/list?userId=${userId}`);
  lists.value = data;
  return lists.value;
};

export const getSingleList = async (id) => {
  const list = ref(null);

  const { data } = await $authHost.get(`api/list/${id}`);
  list.value = data;
  return list.value;
};
