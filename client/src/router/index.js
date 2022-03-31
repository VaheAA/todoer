import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import ListItem from '../views/ListItem.vue';
import CreateList from '../views/CreateList.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
    component: CreateList
  },
  {
    path: '/list/:id',
    name: 'ListItem',
    component: ListItem
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
