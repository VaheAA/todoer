<template>
  <main class="main" v-if="!isLoading">
    <div class="home">
      <div class="container">
        <h1 class="main-title">My Lists</h1>
        <ul class="lists" v-if="lists && lists.length > 0">
          <ListItem
            v-for="list in lists"
            :key="list"
            :id="list.id"
            :title="list.name"
            @deleteList="handleDelete(list.id)"
          />
        </ul>
        <h2 class="message" v-else>
          You have not todo lists, please add a new one.
          <!-- <router-link class="nav__link" :to="{ name: 'CreateLIst' }"
            >Create List</router-link
          > -->
        </h2>
      </div>
    </div>
  </main>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import ListItem from '../components/ListItem.vue';
import { getLists } from '../composables/getLists';
import { useLoggedInUserStore } from '../store/userStore';
import { deleteList } from '../composables/useList';
const lists = ref(null);
const isLoading = ref(false);

const store = useLoggedInUserStore();

const handleDelete = async (id) => {
  await deleteList(id);
  lists.value = await getLists(store.user.id);
};

onMounted(async () => {
  isLoading.value = true;
  const store = useLoggedInUserStore();
  if (store.user) {
    lists.value = await getLists(store.user.id);
    isLoading.value = false;
  } else {
    return;
  }
});
</script>

<style lang="scss">
.main-title {
  text-align: center;
  color: $veryDarkCyan;
  font-size: 3rem;
  margin-bottom: 2rem;
}
.lists {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1rem 0;
  gap: 15px;
}
</style>
