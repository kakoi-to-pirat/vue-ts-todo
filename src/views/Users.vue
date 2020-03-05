<template>
  <div class="roles">
    <h1>Users</h1>
    <users-list />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import UsersList from '@/components/UsersList.vue';

@Component({
  components: { UsersList },
})
export default class Users extends Vue {}
</script>
