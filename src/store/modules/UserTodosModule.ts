import { State, Mutation, Action, Getter } from 'vuex-simple';
import UserTodoModel from '@/models/UserTodoModel';
import HTTP from '../../http-common';

export class UserTodosModule {
  @State()
  private _userTodos: UserTodoModel[] = [];

  @State()
  private _userId?: number;

  @Mutation()
  public setUserTodos(userTodos: UserTodoModel[]): void {
    this._userTodos = userTodos;
  }

  @Mutation()
  public setUserId(userId: number): void {
    this._userId = userId;
  }

  @Getter()
  public get userTodos(): UserTodoModel[] {
    return this._userTodos;
  }

  @Action()
  public async loadUserTodos(): Promise<UserTodoModel[]> {
    try {
      const { data } = await HTTP.get(`todos?userId=${this._userId}`);
      this.setUserTodos(data);
      return data;
    } catch (error) {
      return [];
    }
  }
}
