export interface SearchServiceInterface<T> {
  getAll(index: string): Promise<T>;

  insert(index: string, body: any): Promise<T>;

  updateById(index: string, data: any): Promise<T>;

  search(
    index: string,
    searchs: [{ text: string; fields: string[] }],
    from: number,
    size: number,
  ): Promise<T>;

  deleteAll(index: string): Promise<T>;

  deleteById(index: string, id: string): Promise<T>;
}

export interface ElasticsearchBody {
  id: string;
  [key: string]: any;
}
