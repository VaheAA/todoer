import { $authHost } from '../api';

export const createList = async (list) => {
  try {
    const { data } = await $authHost.post('api/list', list);
    return data;
  } catch (err) {
    alert(err);
  }
};
