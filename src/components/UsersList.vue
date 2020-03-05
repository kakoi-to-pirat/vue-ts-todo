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
  public store: Store = useStore(this.$store);
  public usersModule?: UsersModule = useModule(this.$store, ['users']);

  private isLoadingData = false;

  private users: UserModel[] = [];
  private usersPage = 1;
  private usersLimit = 1;
  private usersTotal = 0;

  mounted() {
    this.loadUsers();
  }

  onChangePage(page: number): void {
    this.store.users.setUsersPage(page);
    this.loadUsers();
  }

  async loadUsers() {
    this.isLoadingData = true;

    await this.store.users.loadUsers();
    this.updateUsersData();

    this.isLoadingData = false;
  }

  updateUsersData() {
    this.users = this.store.users.users;
    this.usersPage = this.store.users.usersPage;
    this.usersLimit = this.store.users.usersLimit;
    this.usersTotal = this.store.users.usersTotalCount;
  }

  onClickToUser(user: UserModel): void {
    console.log(user);
  }
}
</script>

<style>
.users-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.users-list__bar {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px 85px;
}
.users-list__table {
  max-width: 1730px;
  margin: 0 85px;
}
.users-list__header {
  font-size: 1.2rem;
  padding: 8px;
}
.users-list__item {
  cursor: pointer;
  color: #4c4c4c;
  padding: 8px;
  text-align: left;
}
</style>
