import { $authHost } from '../api';

export const createList = async (list) => {
  try {
    const { data } = await $authHost.post('api/list', list);
    return data;
  } catch (err) {
    alert(err);
  }
};

export const deleteList = async (id) => {
  try {
    const { data } = await $authHost.delete(`api/list/${id}`);
    return data;
  } catch (err) {
    alert(err);
  }
};
