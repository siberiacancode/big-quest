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
      use: (onSuccess?: SuccessRequestFun, onFailure?: FailureRequestFun) => RequestInterceptor;
      eject: (interceptor: RequestInterceptor) => void;
    };
    response: {
      use: (onSuccess?: SuccessResponseFun, onFailure?: FailureResponseFun) => ResponseInterceptor;
      eject: (interceptor: ResponseInterceptor) => void;
    };
  };

  constructor({ baseURL, headers = {} }: HttpClientParams) {
    this.baseURL = baseURL;
    this.headers = headers;
    this.interceptorHandlers = { request: [], response: [] };
    this.interceptors = {
      request: {
        use: (onSuccess, onFailure) => {
          const interceptor = { onSuccess, onFailure };
          this.interceptorHandlers.request?.push(interceptor);
          return interceptor;
        },
        eject: (interceptor) => {
          this.interceptorHandlers.request = this.interceptorHandlers.request?.filter(
            (interceptorLink) => interceptorLink !== interceptor
          );
        }
      },
      response: {
        use: (onSuccess, onFailure) => {
          const interceptor = { onSuccess, onFailure };
          this.interceptorHandlers.response?.push(interceptor);
          return interceptor;
        },
        eject: (interceptor) => {
          this.interceptorHandlers.response = this.interceptorHandlers.response?.filter(
            (interceptorLink) => interceptorLink !== interceptor
          );
        }
      }
    };
  }

  private createSearchParams(params: SearchParams) {
    const searchParams = new URLSearchParams();

    for (const key in params) {
      if (Object.prototype.hasOwnProperty.call(params, key)) {
        const value = params[key];

        if (Array.isArray(value)) {
          value.forEach((currentValue) => searchParams.append(key, currentValue));
        } else if (value) {
          searchParams.set(key, value);
        }
      }
    }

    return `?${searchParams.toString()}`;
  }

  private async runResponseInterceptors<T>(
    initialResponse: Response,
    initialConfig: _RequestConfig
  ) {
    if (!this.interceptorHandlers.response?.length && initialResponse.ok) {
      const body = (await initialResponse.json()) as T;
      return body;
    }

    if (!this.interceptorHandlers.response?.length && !initialResponse.ok) {
      throw new Error(initialResponse.statusText);
    }

    let body = (await initialResponse.json()) as T;
    const response = {
      status: initialResponse.status,
      statusText: initialResponse.statusText,
      success: initialResponse.ok,
      data: body
    };

    this.interceptorHandlers.response?.forEach(({ onSuccess, onFailure }) => {
      try {
        if (!initialResponse.ok) throw new Error(initialResponse.statusText);
        if (!onSuccess) return;
        body = onSuccess(response);
      } catch (error) {
        // @ts-ignore
        error.config = initialConfig;
        // @ts-ignore
        error.response = response;
        if (onFailure) {
          body = onFailure(error as ResponseError);
        } else return Promise.reject(error);
      }
    });

    return body;
  }

  private runRequestInterceptors(initialConfig: _RequestConfig) {
    let config = initialConfig;

    this.interceptorHandlers.request?.forEach(({ onSuccess, onFailure }) => {
      try {
        if (!onSuccess) return;
        config = onSuccess(config);
      } catch (error) {
        // @ts-ignore
        error.config = initialConfig;
        if (onFailure) {
          onFailure(error as ResponseError);
        } else return Promise.reject(error);
      }
    });

    return config;
  }

  private async request<T>(endpoint: string, method: RequestMethod, options: RequestOptions = {}) {
    const defaultConfig: _RequestConfig = {
      ...options,
      url: endpoint,
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

  post<T>(endpoint: string, body?: Record<string, any>, options: RequestOptions = {}) {
    return this.request<T>(endpoint, 'POST', {
      ...options,
      ...(!!body && { body: JSON.stringify(body) })
    });
  }

  put<T>(endpoint: string, body?: Record<string, any>, options: RequestOptions = {}) {
    return this.request<T>(endpoint, 'PUT', {
      ...options,
      ...(!!body && { body: JSON.stringify(body) })
    });
  }

  patch<T>(endpoint: string, body?: Record<string, any>, options: RequestOptions = {}) {
    return this.request<T>(endpoint, 'PATCH', {
      ...options,
      ...(!!body && { body: JSON.stringify(body) })
    });
  }

  call<T>(options: _RequestConfig) {
    return this.request<T>(options.url, options.method, {
      ...options
    });
  }
}
