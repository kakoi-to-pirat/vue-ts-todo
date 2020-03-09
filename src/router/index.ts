import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Users',
    component: () =>
      import(/* webpackChunkName: "users" */ '../views/Users.vue'),
  },
  {
    path: '/user-todos/:id',
    name: 'UserTodos',
    component: () =>
      import(/* webpackChunkName: "user-todos" */ '../views/UserTodos.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
