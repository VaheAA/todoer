<template>
  <form class="form" @submit.prevent="handleClick">
    <h1 class="form__title">{{ title }}</h1>
    <div class="form__group">
      <label class="form__label"> List name</label>
      <input
        :value="listName"
        @input="$emit('update:listName', $event.target.value)"
        class="form__input"
        type="email"
        required
      />
    </div>
    <button class="btn submit__btn">{{ btnText }}</button>
  </form>
</template>

<script setup>
const propst = defineProps({
  listName: String,
  title: String,
  btnText: String
});

const emit = defineEmits(['update:listName', 'handleSubmit']);

const handleClick = () => {
  emit('handleSubmit');
};
</script>

<style lang="scss"></style>
