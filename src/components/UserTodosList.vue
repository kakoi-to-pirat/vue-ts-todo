<template>
  <div class="table-list">
    <loading v-if="isLoadingData" />

    <table border="1" class="table-list__table">
      <tr>
        <th class="table-list__header">UserId</th>
        <th class="table-list__header">TodoId</th>
        <th class="table-list__header">Title</th>
        <th class="table-list__header">Completed</th>
      </tr>

      <tr v-for="todo in userTodos" :key="`todo-${todo.id}`">
        <th class="table-list__item">{{ todo.userId }}</th>
        <th class="table-list__item">{{ todo.id }}</th>
        <th class="table-list__item">{{ todo.title }}</th>
        <th class="table-list__item">{{ getStatus(todo) }}</th>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Loading from '@/components/Loading.vue';

import UserTodoModel from '@/models/UserTodoModel';

import { useStore, useModule } from 'vuex-simple';
import { Store } from '@/store/Store';
import { UserTodosModule } from '@/store/modules/UserTodosModule';

import '@/assets/table-list.css';

@Component({
  components: { Loading },
})
export default class UserTodosList extends Vue {
  store: Store = useStore(this.$store);
  userTodosModule?: UserTodosModule = useModule(this.$store, ['userTodos']);

  isLoadingData = false;

  userTodos: UserTodoModel[] = [];

  mounted() {
    this.loadUserTodos();
  }

  async loadUserTodos() {
    this.isLoadingData = true;

    const userId = parseInt(this.$route.params.id);

    try {
      await this.store.userTodos.loadUserTodos(userId);
      this.updateUsersData();

      this.isLoadingData = false;
    } catch (error) {
      this.isLoadingData = false;
      throw error;
    }
  }

  updateUsersData() {
    this.userTodos = this.store.userTodos.userTodos;
  }

  getStatus(todo: UserTodoModel): string {
    return todo.completed ? 'Yes' : 'No';
  }
}
</script>
