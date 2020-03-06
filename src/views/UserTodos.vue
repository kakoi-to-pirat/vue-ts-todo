<template>
  <div class="roles">
    <h1>UserTodos</h1>
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
