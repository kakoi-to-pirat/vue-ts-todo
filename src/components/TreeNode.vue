<template>
  <ul class="tree-list">
    <li
      class="tree-list__item"
      :key="`tree-node-${node.id}`"
      v-for="node in tree"
    >
      <span v-if="isEditable">
        <input
          type="checkbox"
          v-bind.prop="{
            checked: node[editableField],
            indeterminate: isIndeterminate(node),
          }"
          v-model="node[editableField]"
          @change="onChangeNode(node)"
        />
        {{ node.name }}
      </span>
      <span v-else>{{ serializeNode(node) }}</span>

      <tree-node
        v-if="node.children"
        :tree="node.children"
        :is-editable="isEditable"
        :editable-field="editableField"
        @change-node="onChangeNode"
      />
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { TreeService } from '@/services/TreeService';
import { Inject } from '@vue-ioc/core';
import TreeNodeModel from '@/models/TreeNodeModel';
import _ from 'lodash';
@Component({
  name: 'TreeNode',
})
export default class TreeNode extends Vue {
  @Inject()
  public treeService!: TreeService;
  @Prop({ required: true })
  private tree!: TreeNodeModel[];
  @Prop()
  private isEditable!: boolean;
  @Prop({ default: 'checked' })
  private editableField!: string;
  onChangeNode(node: TreeNodeModel): void {
    this.$emit('change-node', _.cloneDeep(node));
  }
  isIndeterminate(node: TreeNodeModel): boolean {
    return this.treeService.isIndeterminate(node);
  }
  serializeNode(node: TreeNodeModel): string {
    return this.treeService.serializeNode(node);
  }
}
</script>

<style scoped>
.tree-list__item {
  list-style: none;
  text-align: left;
}
</style>
