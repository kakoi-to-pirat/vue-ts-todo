import { Module } from 'vuex-simple';
import { UsersModule } from './modules/UsersModule';

export class Store {
  @Module()
  public users = new UsersModule();
}
