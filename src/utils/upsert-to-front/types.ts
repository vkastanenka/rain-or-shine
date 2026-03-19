export interface UpsertToFrontOptions<T> {
  filterKey?: keyof T;
  max?: number;
}
