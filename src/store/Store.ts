import { Module } from 'vuex-simple';
import { UsersModule, UserTodosModule, UsersRolesStore } from './modules';

export class Store {
  @Module()
  public users = new UsersModule();

  @Module()
  public userTodos = new UserTodosModule();

  @Module()
  public userRoles = new UsersRolesStore();
}
