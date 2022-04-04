<template>
  <div
    class="todo"
    :class="{ 'todo--complete': complete, 'todo--current': !complete }"
    :complete="complete"
  >
    <h3 class="todo__title">
      {{ text }}
    </h3>
    <div class="todo__actions">
      <font-awesome-icon
        class="todo__marker"
        :class="{
          'todo__marker--done': complete,
          'todo__marker--current': !complete
        }"
        :icon="['fas', 'circle-check']"
      />
      <font-awesome-icon
        class="todo__marker"
        :icon="['fas', 'circle-xmark']"
        @click="handleDelete(id)"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  text: String,
  complete: Boolean
});

const emit = defineEmits(['deleteTodo']);

const handleDelete = (id) => {
  emit('deleteTodo', id);
};
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
  &__actions {
    display: flex;
    justify-content: space-between;
    gap: 0.75rem;
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
