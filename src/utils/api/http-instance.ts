interface HttpClientParams {
  baseURL: BaseUrl;
  headers?: Record<string, string>;
}

export class HttpClient {
  readonly baseURL: BaseUrl;

  readonly headers: Record<string, string>;

  constructor({ baseURL, headers = {} }: HttpClientParams) {
    this.baseURL = baseURL;
    this.headers = headers;
  }

  createSearchParams(params: Record<string, string>) {
    const searchParams = new URLSearchParams();

    // eslint-disable-next-line no-restricted-syntax
    for (const key in params) {
      if (Object.prototype.hasOwnProperty.call(params, key)) {
        searchParams.set(key, params[key]);
      }
    }

    return `?${searchParams.toString()}`;
  }

  setBearerAuth(token: string) {
    this.headers.Authorization = `Bearer ${token}`;
  }

  async request<T>(endpoint: string, method: RequestMethod, options: RequestOptions = {}) {
    const defaultConfig: RequestInit = {
      ...options,
      method,
      headers: { ...(!!options?.headers && options.headers), ...this.headers }
    };

    let url = `${this.baseURL}/${endpoint}`;
    if (options.params) {
      url += this.createSearchParams(options.params);
    }

    const response = await fetch(url, defaultConfig);

    if (!response.ok) throw new Error(response.statusText);

    return (await response.json()) as T;
  }

  get<T>(endpoint: string, options: Omit<RequestOptions, 'body'> = {}) {
    return this.request<T>(endpoint, 'GET', options);
  }

  delete<T>(endpoint: string, options: Omit<RequestOptions, 'body'> = {}) {
    return this.request<T>(endpoint, 'DELETE', options);
  }

  post<T>(endpoint: string, body: Record<string, any>, options: RequestOptions = {}) {
    return this.request<T>(endpoint, 'POST', {
      ...options,
      ...(!!body && { body: JSON.stringify(body) })
    });
  }

  put<T>(endpoint: string, body: Record<string, any>, options: RequestOptions = {}) {
    return this.request<T>(endpoint, 'PUT', {
      ...options,

      ...(!!body && { body: JSON.stringify(body) })
    });
  }

  patch<T>(endpoint: string, body: Record<string, any>, options: RequestOptions = {}) {
    return this.request<T>(endpoint, 'PATCH', {
      ...options,

      ...(!!body && { body: JSON.stringify(body) })
    });
  }
}
