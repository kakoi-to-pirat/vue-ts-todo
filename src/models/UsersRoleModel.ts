export default interface UsersRoleModel {
  id: number;
  parentId: number;
  name: string;
  children: Array<object>;
  isApprove: boolean;
}
