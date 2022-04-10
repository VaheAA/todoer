<template>
  <div class="overlay">
    <form class="form" @submit.prevent="handleClick">
      <h1 class="form__title">{{ title }}</h1>
      <div class="form__group">
        <label class="form__label"> Todo name</label>
        <input
          :value="todoName"
          @input="$emit('update:todoName', $event.target.value)"
          class="form__input"
          type="text"
          required
        />
      </div>

      <div class="form__group">
        <label class="form__label">Complete:</label>
        <input
          type="checkbox"
          :value="done"
          @change="$emit('update:done', $event.target.checked)"
          class="form__input form__input-checkbox"
        />
      </div>
      <button class="btn submit__btn">{{ btnText }}</button>
    </form>
  </div>
</template>

<script setup>
const props = defineProps({
  todoName: String,
  done: Boolean,
  title: String,
  btnText: String
});

const emit = defineEmits(['update:todoName', 'update:done', 'handleSubmit']);

const handleClick = () => {
  emit('handleSubmit');
};
</script>

<style lang="scss">
.overlay {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba($color: #000000, $alpha: 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .form {
    background-color: #fff;
    z-index: 10;
    width: 600px;
  }
}
</style>
