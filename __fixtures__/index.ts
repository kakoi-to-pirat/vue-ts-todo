import TreeNodeModel from '@/models/TreeNodeModel';
export const StaticUsersRoles: TreeNodeModel[] = [
  {
    id: 5,
    parentId: 0,
    name: 'Management',
    isApprove: true,
  },
  {
    id: 2,
    parentId: 3,
    name: 'Complete Removal',
    isApprove: true,
  },
  {
    id: 4,
    parentId: 5,
    name: 'Modify',
    isApprove: true,
  },
  {
    id: 3,
    parentId: 4,
    name: 'Removal',
    isApprove: false,
  },
  {
    id: 113,
    name: 'Preview',
    isApprove: false,
  },
  {
    id: 112,
    parentId: 4,
    name: 'Edit',
    isApprove: true,
  },
  {
    id: 110,
    parentId: 4,
    name: 'Add',
    isApprove: true,
  },
];
