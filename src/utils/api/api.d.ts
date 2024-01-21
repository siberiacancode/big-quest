interface MutationSettings<Params = void, Func = unknown> {
  config?: ApiRequestConfig;
  options?: import('@tanstack/react-query').UseMutationOptions<
    Awaited<ReturnType<Func>>,
    any,
    Params,
    any
  >;
}

interface QuerySettings<Func = unknown> {
  config?: ApiRequestConfig;
  options?: Omit<
    import('@tanstack/react-query').UseQueryOptions<
      Awaited<ReturnType<Func>>,
      any,
      Awaited<ReturnType<Func>>,
      any
    >,
    'queryKey'
  >;
}

type BaseUrl = string;
type RequestMethod = RequestInit['method'];
interface InterceptorResponseResult {
  success: Response['ok'];
  status: Response['status'];
  statusText: Response['statusText'];
  data: any;
}
type SuccessResponseFun = (res: InterceptorResponseResult) => InterceptorResponseResult['data'];
type SuccessRequestFun = (options: RequestInit) => RequestInit;

type FailureError = Error & { config: RequestInit; response: InterceptorResponseResult };
type FailureResponseFun = (e: FailureError) => InterceptorResponseResult['data'];
type FailureRequestFun = (e: Error) => InterceptorResponseResult['data'];

interface Interceptors {
  request?: Array<{
    onSuccess: SuccessRequestFun;
    onFailure?: FailureRequestFun;
  }>;
  response?: Array<{
    onSuccess: SuccessResponseFun;
    onFailure?: FailureResponseFun;
  }>;
}

interface RequestOptions extends Omit<RequestInit, 'method'> {
  headers?: Record<string, string>;
  params?: Record<string, string>;
}

type RequestConfig<Params = undefined> = Params extends undefined
  ? { config?: RequestOptions }
  : { params: Params; config?: RequestOptions };

interface BaseResponse {
  message: string;
}
