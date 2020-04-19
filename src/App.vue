<template>
  <div class="app">
    <div class="app__navbar">
      <router-link to="/">Users</router-link> |
      <router-link to="/roles">Roles</router-link> |
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
import { TreeService } from '@/services/TreeService';
import Users from './views/Users.vue';

@Module({
  providers: [PaginationService, TreeService],
})
@Component({
  components: { Users },
})
export default class App extends Vue {}
</script>

<style scoped>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
.app__nav {
  padding: 30px;
}
.app__nav a {
  font-weight: bold;
  color: #2c3e50;
}
.app__nav a.router-link-exact-active {
  color: #42b983;
}
</style>
