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
  params?: SearchParams;
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
  params?: SearchParams;
}

type RequestParams<Params = undefined> = Params extends undefined
  ? { config?: RequestOptions }
  : { params: Params; config?: RequestOptions };

interface BaseResponse {
  message: string;
}

interface RegisterOrganizationDto {
  organization: string;
  location: string;
  type: LegalType;
  contactName: string;
  phone: string;
}

type LegalType = 'SPONSOR' | 'PARTNER';
type Stage = 'REQUEST' | 'NEGOTIATION' | 'CONCLUSION';

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

interface LoginEmailDto {
  email: string;
  password: string;
}

interface OrganizationPaginationResponse {
  rows: OrganizationResponse[];
  pagination: PaginationResponse;
}

interface PaginationResponse {
  limit: number;
  current: number;
  count: number;
}

interface OrganizationResponse {
  id: string;
  name: string;
  description: string;
  inn: string;
  information: OrganizationInformationDto;
  addresses: OrganizationAddressDto[];
  requisites: RequisitesDto;
  stage: StageType;
  type: LegalType;
  createdAt: string;
  updatedAt: string;
}

interface OrganizationAddressDto {
  locality: string;
  street: string;
  house: string;
  details?: string;
  workingHours: WorkingHourDto;
}

interface WorkingHourDto {
  day: number;
  from: { hour: number; minutes: number };
  to: { hour: number; minutes: number };
  dayOff: boolean;
}

interface OrganizationInformationDto {
  contactName?: string;
  phone?: string;
  email?: string;
  site?: string;
  city?: string;
  social?: string;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
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
