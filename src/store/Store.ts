import { Module } from 'vuex-simple';
import { UsersModule } from './modules/UsersModule';
import { UserTodosModule } from './modules/UserTodosModule';

export class Store {
  @Module()
  public users = new UsersModule();

  @Module()
  public userTodos = new UserTodosModule();
}
