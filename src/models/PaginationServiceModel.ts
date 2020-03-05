export default interface PaginationServiceModel {
  pageLast(pagesTotal: number, pagesLimit: number): number;
  pagePrev(currentPage: number): number;
  pageNext(currentPage: number, pageLast: number): number;
}
