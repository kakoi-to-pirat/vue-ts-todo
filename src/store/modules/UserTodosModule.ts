import { State, Mutation, Action, Getter } from 'vuex-simple';
import UserTodoModel from '@/models/UserTodoModel';
import HTTP from '../../http-common';

export class UserTodosModule {
  @State()
  private _userTodos: UserTodoModel[] = [];

  @Mutation()
  public setUserTodos(userTodos: UserTodoModel[]): void {
    this._userTodos = userTodos;
  }

  @Getter()
  public get userTodos(): UserTodoModel[] {
    return this._userTodos;
  }

  @Action()
  public async loadUserTodos(userId: number): Promise<UserTodoModel[]> {
    try {
      const { data } = await HTTP.get(`todos?userId=${userId}`);
      this.setUserTodos(data);
      return data;
    } catch (error) {
      return [];
    }
  }
}
