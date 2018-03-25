export interface Page<T> {
  totalPageCount:number;
  totalItemCount:number;
  pageSize:number;
  items:T[];
}
