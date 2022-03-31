import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import ListItem from '../views/ListItem.vue';
import CreateList from '../views/CreateList.vue';
import useStore from '../store/userStore.js';

console.log(useStore);

const requireAuth = (to, from, next) => {
  let currentUser = user;
  if (!currentUser) {
    next({ name: 'Login' });
  } else {
    next();
  }
};

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: requireAuth
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/list/create',
    name: 'CreateList',
    component: CreateList,
    beforeEnter: requireAuth
  },
  {
    path: '/list/:id',
    name: 'ListItem',
    component: ListItem,
    beforeEnter: requireAuth
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
