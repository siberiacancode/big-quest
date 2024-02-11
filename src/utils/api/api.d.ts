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

interface OrganizationAddressDto {
  organizationId: string;
  locality: string;
  street: string;
  house: string;
  details?: string;
  workingHours: WorkingHourDto[];
}

interface RegisterOrganizationDto {
  organization: string;
  location: string;
  type: LegalType;
  contactName: string;
  phone: string;
}
type LegalType = 'SPONSOR' | 'PARTNER';

type UserRole = 'organizer' | 'partner';

interface AddressResponse {
  country: string;
  region: string;
  city: string;
  postal_code: string;
  street: string;
  house: string;
  flat: number;
  geo_lat: number;
  geo_lon: number;
  unrestrictedValue: string;
}

interface OrganizationAddressesResponse {
  addresses: {
    organizationId: string;
    locality: string;
    street: string;
    house: string;
    details?: string;
    workingHours: WorkingHourDto[];
  }[];
}

interface LoginEmailDto {
  email: string;
  password: string;
}
