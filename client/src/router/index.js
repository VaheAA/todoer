import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import CreateList from '../views/CreateList.vue';
import SingleList from '../views/SingleList.vue';
import { useLoggedInUserStore } from '../store/userStore';

const requireAuth = (to, from, next) => {
  const store = useLoggedInUserStore();
  if (!store.isAuth) {
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
    beforEnter: requireAuth
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
    beforEnter: requireAuth
  },
  {
    path: '/list/:id',
    name: 'SingleList',
    component: SingleList,
    beforEnter: requireAuth
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
