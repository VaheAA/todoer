<template>
  <div
    class="todo"
    :class="{ 'todo--complete': complete, 'todo--current': !complete }"
    :complete="complete"
  >
    <h3 class="todo__title">
      {{ text }}
    </h3>
    <font-awesome-icon
      class="todo__marker"
      :class="{
        'todo__marker--done': complete,
        'todo__marker--current': !complete
      }"
      :icon="['fas', 'circle-check']"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  text: String,
  complete: Boolean
});
</script>

<style lang="scss">
.todo {
  border: 1px solid $primaryDarkCyan;
  border-radius: 5px;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 450px;
  width: 100%;
  margin: 0 auto;

  &--current {
    background-color: #fff;
  }

  &--complete {
    background-color: $bgLightCyan;
  }

  &__title {
    font-size: 1.4rem;
    color: $veryDarkCyan;
  }
  &__marker {
    cursor: pointer;
    font-size: 24px;
  }
  &__marker--current {
    color: $darkCyan;
  }
  &__marker--done {
    color: $primaryDarkCyan;
  }
}
</style>
