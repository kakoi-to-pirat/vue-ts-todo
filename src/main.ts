import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { VueIocPlugin } from '@vue-ioc/core';

Vue.use(VueIocPlugin);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
