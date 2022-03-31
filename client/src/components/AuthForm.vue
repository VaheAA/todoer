<template>
  <form class="form" @submit.prevent="handleClick">
    <h1 class="form__title">{{ title }}</h1>
    <div class="form__group">
      <label class="form__label"> Email:</label>
      <input
        :value="inputEmail"
        @input="$emit('update:inputEmail', $event.target.value)"
        class="form__input"
        type="email"
        required
      />
    </div>
    <div class="form__group">
      <label class="form__label"> Password:</label>
      <input
        :value="inputPassword"
        @input="$emit('update:inputPassword', $event.target.value)"
        class="form__input"
        type="password"
      />
    </div>
    <button class="btn submit__btn">{{ btnText }}</button>
  </form>
</template>

<script setup>
const props = defineProps({
  title: String,
  btnText: String,
  inputEmail: String,
  inputPassword: String
});

const emit = defineEmits([
  'update:inputEmail',
  'update:inputPassword',
  'handleSubmit'
]);

const handleClick = () => {
  emit('handleSubmit');
};
</script>

<style lang="scss">
.form {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-radius: 5px;

  &__title {
    text-align: center;
    font-size: 2rem;
  }

  &__group {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    gap: 15px;
  }
  &__input {
    width: 100%;
    padding: 0.3rem;
    border-radius: 5px;
    border: 1px solid $primaryDarkCyan;
    color: $veryDarkCyan;
  }
  &__label {
    width: 100px;
    font-size: 1.1rem;
    color: $darkCyan;
  }
  .btn {
    width: 180px;
    margin: 0 auto;
    padding: 0.55rem 0.25rem;
    background-color: $primaryDarkCyan;
    border: none;
    font-size: 1.1rem;
    border-radius: 5px;
    cursor: pointer;
    color: $bgLightCyan;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }
  }
}
</style>
