<template>
  <div class="users-list">
    <loading v-if="isLoadingData" />

    <table border="1" class="users-list__table">
      <tr>
        <th class="users-list__header">Name</th>
        <th class="users-list__header">Username</th>
        <th class="users-list__header">Email</th>
        <th class="users-list__header">Phone</th>
        <th class="users-list__header">Website</th>
        <th class="users-list__header">Company</th>
        <th class="users-list__header">Address</th>
      </tr>

      <tr
        v-for="user in users"
        :key="`user-${user.id}`"
        @click="onClickToUser(user)"
      >
        <th class="users-list__item">{{ user.name }}</th>
        <th class="users-list__item">{{ user.username }}</th>
        <th class="users-list__item">{{ user.email }}</th>
        <th class="users-list__item">{{ user.phone }}</th>
        <th class="users-list__item">{{ user.website }}</th>

        <th class="users-list__item">
          Name: {{ user.company.name }} <br />
          CatchPhrase: {{ user.company.catchPhrase }} <br />
          BS: {{ user.company.bs }} <br />
        </th>

        <th class="users-list__item">
          {{ user.address.street }}, {{ user.address.suite }},
          {{ user.address.zipcode }}, {{ user.address.geo.lat }}
          {{ user.address.geo.lng }}
        </th>
      </tr>
    </table>

    <div class="users-list__bar">
      <pagination
        :page="usersPage"
        :limit="usersLimit"
        :total="usersTotal"
        @change="onChangePage"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Loading from '@/components/Loading.vue';
import Pagination from '@/components/Pagination.vue';
import UserModel from '@/models/UserModel';

import { useStore, useModule } from 'vuex-simple';
import { Store } from '@/store/Store';
import { UsersModule } from '@/store/modules/UsersModule';

@Component({
  components: { Loading, Pagination },
})
export default class UsersList extends Vue {
  store: Store = useStore(this.$store);
  usersModule?: UsersModule = useModule(this.$store, ['users']);

  isLoadingData = false;

  users: UserModel[] = [];
  usersPage = 1;
  usersLimit = 1;
  usersTotal = 0;

  mounted() {
    this.loadUsers();
  }

  onChangePage(page: number): void {
    this.store.users.setUsersPage(page);
    this.loadUsers();
  }

  async loadUsers() {
    this.isLoadingData = true;

    try {
      await this.store.users.loadUsers();
      this.updateUsersData();

      this.isLoadingData = false;
    } catch (error) {
      this.isLoadingData = false;
      throw error;
    }
  }

  updateUsersData() {
    this.users = this.store.users.users;
    this.usersPage = this.store.users.usersPage;
    this.usersLimit = this.store.users.usersLimit;
    this.usersTotal = this.store.users.usersTotalCount;
  }

  onClickToUser(user: UserModel): void {
    this.$router.push(`/user-todos/${user.id}`);
  }
}
</script>

<style scoped></style>
