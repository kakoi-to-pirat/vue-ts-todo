<template>
  <div class="users-list">
    <loading v-if="isLoadingData" />
    UserTodoModel
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Loading from '@/components/Loading.vue';
import UserTodoModel from '@/models/UserTodoModel';

@Component({})
export default class UserTodosList extends Vue {
  private isLoadingData = false;
  mounted() { }
}
</script>
