<template>
  <div class="tree">
    <div class="tree__data">
      <h3>Source:</h3>
      <tree-node :tree="data" />

      <h3>Result:</h3>
      <tree-node :tree="tree" />
    </div>

    <div class="tree__actions">
      <h3>Editable:</h3>
      <ul class="tree__actions-list">
        <tree-node
          :tree="tree"
          :is-editable="true"
          :editable-field="editableField"
          @change-node="onChangeNode"
        />
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Inject } from '@vue-ioc/core';
import { TreeService } from '@/services/TreeService';
import TreeNodeModel from '@/models/TreeNodeModel';
import TreeNode from '@/components/TreeNode.vue';
@Component({
  components: { TreeNode },
})
export default class Tree extends Vue {
  @Inject()
  public treeService!: TreeService;

  @Prop()
  private data!: TreeNodeModel[];

  @Prop({ default: 'checked' })
  private editableField!: string;

  get tree(): TreeNodeModel[] {
    return this.treeService.build(this.data);
  }

  onChangeNode(node: TreeNodeModel) {
    const updatedTree = this.treeService.update(this.tree, node);
    const parsedTree = this.treeService.parse(updatedTree);
    this.$emit('change', parsedTree);
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.tree {
  display: flex;
  justify-content: space-between;
  border: 1px solid #eee;
  padding: 5px;
}
.tree__data {
  width: calc(50% - 2.5px);
  border: 1px solid #eee;
  padding: 0 15px;
  margin-right: 2.5px;
  text-align: left;
}
.tree__actions {
  width: calc(50% - 2.5px);
  border: 1px solid #eee;
  padding: 0 15px;
  margin-left: 2.5px;
  text-align: left;
}
</style>
