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
}
