type UserRole = 'organizer' | 'partner';

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
type RequestConfig = RequestInit & {
  url: string;
  _retry?: boolean;
  headers?: Record<string, string>;
  params?: Record<string, string>;
};
interface InterceptorResponseResult {
  success: Response['ok'];
  status: Response['status'];
  statusText: Response['statusText'];
  data: any;
}
type SuccessResponseFun = (res: InterceptorResponseResult) => InterceptorResponseResult['data'];
type SuccessRequestFun = (options: RequestConfig) => RequestConfig;

type ResponseError = Error & { config: RequestConfig; response: InterceptorResponseResult };
type FailureResponseFun = (e: ResponseError) => any;
type FailureRequestFun = (e: ResponseError) => any;

interface RequestInterceptor {
  onSuccess?: SuccessRequestFun;
  onFailure?: FailureRequestFun;
}

interface ResponseInterceptor {
  onSuccess?: SuccessResponseFun;
  onFailure?: FailureResponseFun;
}
interface Interceptors {
  request?: RequestInterceptor[];
  response?: ResponseInterceptor[];
}

interface RequestOptions extends Omit<RequestInit, 'method'> {
  headers?: Record<string, string>;
  params?: Record<string, string>;
}

type RequestParams<Params = undefined> = Params extends undefined
  ? { config?: RequestOptions }
  : { params: Params; config?: RequestOptions };

interface BaseResponse {
  message: string;
}

// Этот тип и файл я позже удалю, пока нужно переработать структуру рабочих часов
interface WorkingHours {
  start: string;
  end: string;
}

interface OrganizationAddAddressDto {
  organizationId: string;
  location: string;
  street: string;
  house: string;
  details: string;
  workingHours: {
    Monday: WorkingHours;
    Tuesday: WorkingHours;
    Wednesday: WorkingHours;
    Thursday: WorkingHours;
    Friday: WorkingHours;
    Saturday: WorkingHours;
    Sunday: WorkingHours;
  };
}
