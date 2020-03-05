import Vue from 'vue';
import Vuex from 'vuex';
import { createVuexStore } from 'vuex-simple';
import { UsersStore } from './UsersStore';

Vue.use(Vuex);

export default createVuexStore(new UsersStore(), {
  strict: false,
  modules: {},
  plugins: [],
});
