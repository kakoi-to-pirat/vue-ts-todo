<template>
  <div class="roles">
    <h1>This is an users roles page</h1>
    <div v-if="isLoadingData">Loading...</div>
    <tree
      v-else
      :data="usersRoles"
      :editable-field="'isApprove'"
      @change="onChangeUsersRoles"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Tree from '@/components/Tree.vue';
import TreeNodeModel from '@/models/TreeNodeModel';

import { useStore, useModule } from 'vuex-simple';
import { Store } from '@/store/Store';
import { UsersModule } from '@/store/modules/UsersModule';

@Component({
  components: { Tree },
})
export default class Roles extends Vue {
  store: Store = useStore(this.$store);
  usersModule?: UsersModule = useModule(this.$store, ['userRoles']);

  isLoadingData?: boolean = false;
  usersRoles: TreeNodeModel[] = [];

  mounted() {
    this.loadUsersRoles();
  }

  onChangeUsersRoles(UsersRoles: TreeNodeModel[]): void {
    this.store.userRoles.setUsersRoles(UsersRoles);
    this.usersRoles = this.store.userRoles.usersRoles;
  }

  async loadUsersRoles() {
    this.isLoadingData = true;

    try {
      await this.store.userRoles.loadUsersRoles();
      this.usersRoles = this.store.userRoles.usersRoles;
      this.isLoadingData = false;
    } catch (error) {
      this.usersRoles = this.store.userRoles.usersRoles;
      this.isLoadingData = false;
      throw error;
    }
  }
}
</script>
