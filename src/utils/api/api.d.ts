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
// eslint-disable-next-line @typescript-eslint/naming-convention
type _RequestConfig = RequestInit & {
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
type SuccessRequestFun = (options: _RequestConfig) => _RequestConfig;

type ResponseError = Error & { config: _RequestConfig; response: InterceptorResponseResult };
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

type RequestConfig<Params = undefined> = Params extends undefined
  ? { config?: RequestOptions }
  : { params: Params; config?: RequestOptions };

interface BaseResponse {
  message: string;
}

type LegalType = 'PARTNER' | 'FRANCHISEE' | 'SPONSOR' | 'ORGANIZER';

type Stage = 'REQUEST' | 'NEGOTIATION' | 'CONCLUSION';

type UserRole = 'organizer' | 'partner';

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

interface OrganizationEmployeeDto {
  organizationId: string;
  role: string;
  name: string;
  name: string;
  email: string;
  phone: string;
  image?: any;
}

interface RegisterOrganizationDto {
  organization: string;
  location: string;
  type: LegalType;
  contactName: string;
  phone: string;
}

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

interface DashBoardResponse {
  partners: Legals;
  sponsors: Legals;
  applications: number;
  negotiation: number;
  tariffChange: number;
}

interface Legals {
  total: number;
  growthPerMonth: number;
}

interface EmployeeDto {
  id: string;
  fullname: string;
  email: string;
  employeeRole: string;
  phoneNumber: string;
}

interface UpdateOrganizationDto {
  id?: string;
  locality?: string;
  name?: string;
  description?: string;
  inn?: string;
  information?: OrganizationInformationDto;
  requisites?: RequisitesDto;
  stage?: string;
}
