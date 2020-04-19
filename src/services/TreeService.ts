import { Injectable } from '@vue-ioc/core';
import * as _ from 'lodash';
import TreeServiceModel from '@/models/TreeServiceModel';
import TreeNodeModel from '@/models/TreeNodeModel';
import UsersRoleModel from '@/models/UsersRoleModel';

@Injectable()
export class TreeService implements TreeServiceModel {
  build(data: TreeNodeModel[]): TreeNodeModel[] {
    const tree = data.reduce((acc: TreeNodeModel[], node: TreeNodeModel) => {
      if (this.isChild(node)) {
        return acc;
      }

      const children = this.getNodeChildrenFromData(data, node.id);
      const TreeNode = this.getTreeNode(node, children);

      return [...acc, TreeNode];
    }, []);

    return tree;
  }

  serializeNode(node: TreeNodeModel): string {
    return _.keys(node).reduce((acc: string, prop: string) => {
      const value = _.get(node, prop);
      return acc ? `${acc} ${prop}: ${value}, ` : `${prop}: ${value}, `;
    }, '');
  }

  withoutChildren(node: TreeNodeModel): TreeNodeModel {
    return _.omit(node, ['children']);
  }

  parse(tree: TreeNodeModel[]): TreeNodeModel[] {
    return tree.reduce((acc: TreeNodeModel[], node: TreeNodeModel) => {
      const children = _.get(node, 'children');
      return children
        ? [
            ...acc,
            ...this.parse(children as TreeNodeModel[]),
            this.withoutChildren(node),
          ]
        : [...acc, node];
    }, []);
  }

  update(tree: TreeNodeModel[], node: TreeNodeModel): TreeNodeModel[] {
    if (node.children) {
      node.children = node.children.map(item =>
        this.updateChildApprove(item as UsersRoleModel, node.isApprove),
      );
    }

    return this.updateTree(tree, node);
  }

  isIndeterminate(node: TreeNodeModel): boolean {
    const children = _.get(node, 'children', []);
    return children.some(child => !_.get(child, 'isApprove'));
  }

  private isChild(node: TreeNodeModel): boolean {
    return Boolean(_.get(node, 'parentId'));
  }

  private isNodeChild(child: TreeNodeModel, nodeId: number): boolean {
    const childParentId = _.get(child, 'parentId');
    return childParentId === nodeId;
  }

  private getNodeChildrenFromData(
    data: TreeNodeModel[],
    nodeId: number,
  ): TreeNodeModel[] {
    const children = data.reduce(
      (children: TreeNodeModel[], child: TreeNodeModel) =>
        this.isNodeChild(child, nodeId) ? [...children, child] : children,
      [],
    );

    const grandChildren = children.map((child: TreeNodeModel) => {
      const currentChildren = this.getNodeChildrenFromData(data, child.id);
      return this.getTreeNode(child, currentChildren);
    });

    return grandChildren;
  }

  private getTreeNode(
    node: TreeNodeModel,
    children: TreeNodeModel[],
  ): TreeNodeModel {
    return _.isEmpty(children) ? { ...node } : { ...node, children };
  }

  private updateChildApprove(
    child: UsersRoleModel,
    isApprove: boolean,
  ): TreeNodeModel {
    child.isApprove = isApprove;

    if (child.children) {
      child.children = child.children.map(item =>
        this.updateChildApprove(item as UsersRoleModel, isApprove),
      );
    }

    return child;
  }

  private updateTree(
    tree: TreeNodeModel[],
    node: TreeNodeModel,
  ): TreeNodeModel[] {
    return tree.map(nodeChild => {
      if (nodeChild.id === node.id) {
        return node;
      }
      if (nodeChild.children) {
        nodeChild.children = this.updateTree(
          _.get(nodeChild, 'children') as TreeNodeModel[],
          node,
        );
      }
      return nodeChild;
    });
  }
}
