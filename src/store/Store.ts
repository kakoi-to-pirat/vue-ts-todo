import { Module } from 'vuex-simple';
import { UsersModule, UserTodosModule } from './modules';

export class Store {
  @Module()
  public users = new UsersModule();

  @Module()
  public userTodos = new UserTodosModule();
}
