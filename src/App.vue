<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Users</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Module } from '@vue-ioc/core';
import { PaginationService } from '@/services/PaginationService';
import Users from './views/Users.vue';

import '@/assets/usersList.css';

@Module({
  providers: [PaginationService],
})
@Component({
  components: { Users },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
