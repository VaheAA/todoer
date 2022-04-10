<template>
  <div class="list__item">
    <router-link
      :to="{
        name: 'SingleList',
        params: { id: id }
      }"
    >
      <div class="list__info">
        <h4 class="list__title">{{ title }}</h4>
      </div>
    </router-link>
    <button class="btn" @click="deleteList">Delete list</button>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  id: Number
});

const emit = defineEmits(['deleteList']);

const deleteList = (id) => {
  emit('deleteList', id);
};
</script>

<style lang="scss">
.list__item {
  padding: 0.75rem;
  border: 1px solid $primaryDarkCyan;
  width: 300px;
  height: 200px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 10px;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  transition: 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.1);
    transform: scale(1.05);
  }
}

.list__info {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  color: $veryDarkCyan;
}

.list__id {
  font-size: 1.25rem;
}

.list__title {
  text-align: center;
  font-size: 1.75rem;
}
</style>
