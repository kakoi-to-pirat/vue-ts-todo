import { State, Mutation, Action, Getter } from 'vuex-simple';
import TreeNodeModel from '@/models/TreeNodeModel';
import { StaticUsersRoles } from '../StaticData';
import HTTP from '../../http-common';

export class UsersRolesStore {
  @State()
  private _usersRoles: TreeNodeModel[] = [];

  @Mutation()
  public setUsersRoles(usersRoles: TreeNodeModel[]): void {
    this._usersRoles = usersRoles;
  }

  @Action()
  public async loadUsersRoles(): Promise<TreeNodeModel[]> {
    try {
      const { data } = await HTTP.get(
        'https://5e514bfdf2c0d300147c05c9.mockapi.io/users-roles',
      );
      this.setUsersRoles(data);
      return data;
    } catch (error) {
      this.setUsersRoles(StaticUsersRoles);
      throw error;
    }
  }

  @Getter()
  public get usersRoles(): TreeNodeModel[] {
    return this._usersRoles;
  }
}
