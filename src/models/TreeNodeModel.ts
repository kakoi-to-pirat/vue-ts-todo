export default interface TreeNodeModel {
  id: number;
  parentId?: number;
  name?: string;
  children?: Array<object>;
  isApprove: boolean;
}
