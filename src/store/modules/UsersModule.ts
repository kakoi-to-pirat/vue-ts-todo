import { State, Mutation, Action, Getter } from 'vuex-simple';
import UserModel from '@/models/UserModel';
import HTTP from '../../http-common';

export class UsersModule {
  @State()
  private _users: UserModel[] = [];

  @State()
  private _usersTotalCount = 0;

  @State()
  private _usersPage = 1;

  @State()
  private _usersLimit = 5;

  @State()
  private _usersQueryParams = '';

  @Mutation()
  public setUsers(users: UserModel[]): void {
    this._users = users;
  }

  @Mutation()
  public setUsersPage(page: number): void {
    this._usersPage = page;
  }

  @Mutation()
  public setUsersLimit(limit: number): void {
    this._usersLimit = limit;
  }

  @Mutation()
  public setUsersTotalCount(count: number): void {
    this._usersTotalCount = count;
  }

  @Mutation()
  public updateUsersQueryParams(): void {
    this._usersQueryParams = `?_page=${this._usersPage}&_limit=${this._usersLimit}`;
  }

  @Getter()
  public get users(): UserModel[] {
    return this._users;
  }

  @Getter()
  public get usersPage(): number {
    return this._usersPage;
  }

  @Getter()
  public get usersLimit(): number {
    return this._usersLimit;
  }

  @Getter()
  public get usersTotalCount(): number {
    return this._usersTotalCount;
  }

  @Action()
  public async loadUsers(): Promise<UserModel[]> {
    this.updateUsersQueryParams();

    try {
      const { data, headers } = await HTTP.get(
        `users${this._usersQueryParams}`,
      );

      this.setUsers(data);
      this.setUsersTotalCount(Number(headers['x-total-count']));

      return data;
    } catch (error) {
      return [];
    }
  }
}
