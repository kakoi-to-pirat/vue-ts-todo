import Vue from 'vue';
import Vuex from 'vuex';
import { createVuexStore } from 'vuex-simple';
import { Store } from './Store';

Vue.use(Vuex);

export default createVuexStore(new Store(), {
  strict: false,
  modules: {},
  plugins: [],
});
