<template>
  <main class="main" v-if="!isLoading">
    <div class="home">
      <div class="container">
        <h1 class="main-title">
          Welcome to the TODOER<span v-if="!store.isAuth">, Stranger</span>!
        </h1>
        <div class="home__welcome">
          <ul class="home__links">
            <li class="home__item">
              <p class="home__text">
                {{
                  !store.isAuth
                    ? "Create Account and start organizing your todo's right away!"
                    : 'What are you waiting for? Create your first list right now!'
                }}
              </p>
              <router-link
                class="nav__link"
                :to="{ name: store.isAuth ? 'CreateList' : 'Register' }"
                >{{
                  store.isAuth ? 'Create List' : 'Create Account'
                }}</router-link
              >
            </li>
            <li class="home__item">
              <p class="home__text">
                {{
                  !store.isAuth
                    ? 'Already have an account? Then login and jump back!'
                    : 'Open up your todos right now!'
                }}
              </p>
              <router-link
                class="nav__link"
                :to="{ name: store.isAuth ? 'UserHome' : 'Login' }"
                >{{ store.isAuth ? 'My Lists' : 'Login' }}</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { useLoggedInUserStore } from '../store/userStore';

const store = useLoggedInUserStore();
</script>

<style lang="scss">
.home {
  &__welcome {
    padding: 1rem;
  }
  &__links {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }
  &__item {
    box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &__text {
    font-size: 1.5rem;
    color: $veryDarkCyan;
    padding-bottom: 1rem;
  }
}

.main-title {
  text-align: center;
  color: $veryDarkCyan;
  font-size: 3rem;
  margin-bottom: 2rem;
}
</style>
