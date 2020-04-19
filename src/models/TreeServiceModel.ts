import TreeNodeModel from '@/models/TreeNodeModel';

export default interface TreeServiceModel {
  build(data: TreeNodeModel[]): TreeNodeModel[];
  serializeNode(node: TreeNodeModel): string;
  withoutChildren(node: TreeNodeModel): TreeNodeModel;
  parse(tree: TreeNodeModel[]): TreeNodeModel[];
  update(tree: TreeNodeModel[], node: TreeNodeModel): TreeNodeModel[];
}
