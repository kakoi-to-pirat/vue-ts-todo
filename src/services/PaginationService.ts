import { Injectable } from '@vue-ioc/core';
import PaginationServiceModel from '@/models/PaginationServiceModel';

@Injectable()
export class PaginationService implements PaginationServiceModel {
  public pageLast(pagesTotal: number, pagesLimit: number): number {
    return pagesTotal / pagesLimit;
  }

  public pagePrev(currentPage: number): number {
    return currentPage - 1 || 1;
  }

  public pageNext(currentPage: number, pageLast: number): number {
    const next = currentPage + 1;
    return next < pageLast ? next : pageLast;
  }
}
