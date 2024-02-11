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

type LegalType = 'PARTNER' | 'FRANCHISEE' | 'SPONSOR' | 'ORGANIZER';

type Stage = 'REQUEST' | 'NEGOTIATION' | 'CONCLUSION';

interface LegalInformationDto {
  fullNameOfTheLegalEntity?: string;
  legalAddress?: string;
  postAggress?: string;
  inn?: string;
  kpp?: string;
  ogrn?: string;
}

interface RequisitesDto {
  bank: string;
  bik: string;
  checkingAccount: string;
}

interface OrganizationResponse {
  contactName: string;
  phone: number;
  email?: string;
  site?: string;
  social?: string[];
  background?: string;
  avatar?: string;
  locality?: string;
  id: string;
  name?: string;
  description?: string;
  legalInfo?: LegalInformationDto;
  requisites?: RequisitesDto;
  stage: Stage;
  type: LegalType;
}
