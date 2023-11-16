export interface PaginationViewModel<Data> {
    count: number;
    data: Data[];
    length: number;
    lastPage: number;
    pageIndex: number;
    pageSize: number;
}
