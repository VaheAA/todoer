<template>
  <div class="list__item">
    <h2 class="list__title">{{ title }}</h2>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String
});
</script>

<style lang="scss">
.list__item {
  padding: 0.5rem;
  border: 1px solid $primaryDarkCyan;
  width: 250px;
  height: 250px;
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

.list__title {
  text-align: center;
  font-size: 1.75rem;
  color: $veryDarkCyan;
}
</style>
