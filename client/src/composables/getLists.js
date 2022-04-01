import { ref } from 'vue';
import { $host, $authHost } from '../api';

export const getLists = async (useId) => {
  const lists = ref(null);

  const { data } = await $authHost.get(`api/list?userId=${useId}`);
  lists.value = data;
  return lists.value;
};
