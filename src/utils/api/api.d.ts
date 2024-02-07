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

interface WorkingTimeDto {
  hour: number;
  minutes: number;
}

interface WorkingHourDto {
  day: number;
  from: WorkingTimeDto;
  to: WorkingTimeDto;
  dayOff: boolean;
}

interface OrganizationInformationDto {
  contactName: string;
  phone: string;
  email: string;
  site: string;
  city: string;
  social: string[];
  fullNameOfTheLegalEntity: string;
  legalAddress: string;
  postAggress: string;
  inn: string;
  kpp: string;
  ogrn: string;
}

interface OrganizationAddressDto {
  locality: string;
  street: string;
  house: string;
  details?: string;
  workingHours: WorkingHourDto[];
}

interface RequisitesDto {
  bank: string;
  bik: string;
  checkingAccount: string;
}

interface OrganizationResponse {
  id: string;
  name: string;
  description: string;
  inn: string;
  information: OrganizationInformationDto;
  addresses: Array<OrganizationAddressDto>;
  requisites: RequisitesDto;
  stage: Stage;
  type: LegalType;
  createdAt: Date;
  updatedAt: Date;
}
