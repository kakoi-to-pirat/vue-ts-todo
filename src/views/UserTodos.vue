<template>
  <div class="roles">
    <h1>UserTodos</h1>
    <user-todos-list />
    <div class="roles__bar">
      <router-link to="/">Back to users</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import UserTodosList from '@/components/UserTodosList.vue';

@Component({
  components: { UserTodosList },
})
export default class UserTodos extends Vue {}
</script>

<style>
.roles__bar {
  display: flex;
  justify-content: flex-end;
  margin: 0 85px;
}
</style>
