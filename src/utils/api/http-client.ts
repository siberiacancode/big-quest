interface HttpClientParams {
  baseURL: BaseUrl;
  headers?: Record<string, string>;
}

export class HttpClient {
  readonly baseURL: BaseUrl;

  readonly headers: Record<string, string>;

  readonly interceptorHandlers: Interceptors;

  readonly interceptors: {
    request: {
      use: (onSuccess: SuccessRequestFun, onFailure?: FailureRequestFun) => void;
    };
    response: {
      use: (onSuccess: SuccessResponseFun, onFailure?: FailureResponseFun) => void;
    };
  };

  constructor({ baseURL, headers = {} }: HttpClientParams) {
    this.baseURL = baseURL;
    this.headers = headers;
    this.interceptorHandlers = { request: [], response: [] };
    this.interceptors = {
      request: {
        use: (onSuccess, onFailure) => {
          this.interceptorHandlers.request?.push({ onSuccess, onFailure });
        }
      },
      response: {
        use: (onSuccess, onFailure) => {
          this.interceptorHandlers.response?.push({ onSuccess, onFailure });
        }
      }
    };
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

  async runResponseInterceptors<T>(initialResponse: Response, initialConfig: RequestInit) {
    let body = (await initialResponse.json()) as T;

    if (!this.interceptorHandlers.response?.length && initialResponse.ok) {
      return body;
    }

    if (!this.interceptorHandlers.response?.length && !initialResponse.ok) {
      throw new Error(initialResponse.statusText);
    }

    const response = {
      status: initialResponse.status,
      statusText: initialResponse.statusText,
      success: initialResponse.ok,
      data: body
    };

    this.interceptorHandlers.response?.forEach(({ onSuccess, onFailure }) => {
      try {
        if (!initialResponse.ok) throw new Error(initialResponse.statusText);
        body = onSuccess(response);
      } catch (error) {
        if (onFailure) {
          // @ts-ignore
          error.config = initialConfig;
          // @ts-ignore
          error.response = response;
          body = onFailure(error as FailureError);
        } else throw new Error((error as Error).message);
      }
    });

    return body;
  }

  runRequestInterceptors(initialConfig: RequestInit) {
    let config = initialConfig;

    this.interceptorHandlers.request?.forEach(({ onSuccess, onFailure }) => {
      try {
        config = onSuccess(config);
      } catch (error) {
        if (onFailure) {
          // @ts-ignore
          error.config = initialConfig;
          onFailure(error as FailureError);
        } else throw new Error((error as Error).message);
      }
    });

    return config;
  }

  async request<T>(endpoint: string, method: RequestMethod, options: RequestOptions = {}) {
    const defaultConfig: RequestInit = {
      ...options,
      method,
      headers: { ...(!!options?.headers && options.headers), ...this.headers }
    };

    const config = this.runRequestInterceptors(defaultConfig);

    let url = `${this.baseURL}/${endpoint}`;
    if (options.params) {
      url += this.createSearchParams(options.params);
    }

    const response: Response = await fetch(url, config);

    return this.runResponseInterceptors<T>(response, config);
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
