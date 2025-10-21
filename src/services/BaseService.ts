export class BaseService<T> {
  protected baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  protected async handleResponse(res: Response): Promise<any> {
    let data = await res.json();
    if (!res.ok) {
      const error = data?.message || res.statusText;
      throw new Error(`Request failed: ${error}`);
    }
    return data;
  }

  async getAll(route: string): Promise<T[]> {
    const url = `${this.baseUrl}/${route}`;
    const res = await fetch(url); // Route should be something like /products
    return this.handleResponse(res);
  }
}
