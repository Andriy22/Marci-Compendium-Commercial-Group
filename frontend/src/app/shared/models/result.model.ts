export interface ResultModel<T> {
  isLoading: boolean;
  isError: boolean;
  data: T;
}
