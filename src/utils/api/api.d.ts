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

type ActivityCategory = 'EDUCATION';

type ActivityStatus = 'DRAFT' | 'MODERATION' | 'EDITING' | 'PUBLISHED' | 'CLOSED';

type ActivityView = 'ONLINE' | 'OFFLINE';

interface LegalInformationDto {
  fullNameOfTheLegalEntity?: string;
  legalAddress?: string;
  postAddress?: string;
  inn?: string;
  kpp?: string;
  ogrn?: string;
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

interface AddEmployeeDto {
  legalEntityId?: string;
  role: 'Administrator' | 'Leading' | 'Manager';
  name: string;
  surname: string;
  email: string;
  phone: string;
  // image?: any;
}

interface EditEmployeeDto {
  userId: string;
  legalEntityId?: string;
  role: 'Administrator' | 'Leading' | 'Manager';
  name: string;
  surname: string;
  email: string;
  phone: string;
  // image?: any;
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

interface CreateActivityDto {
  name: string;
  category: string;
  description?: string;
  ageLimit: number[];
  price: number;
  duration: number;
  replay: boolean;
  organizationId: string;
  files?: File[];
}

interface Time {
  hour: number;
  minutes: number;
}

interface Schedule {
  address: string;
  leadingEmployeeId: string;
  entry: boolean;
  regular: boolean;
  date: Date;
  time: Time;
  maxNumberOfParticipants: number;
  period: number[];
}

interface MediaResponse {
  id: number;
  url: string;
  position: number;
  type: 'image' | 'video';
  ext: string;
  size: number;
  isAvatar: boolean;
}

interface ActivityResponse {
  id: string;
  media: MediaResponse[];
  name: string;
  description?: string;
  ageLimit: number[];
  price: number;
  nutsCount: number;
  duration: number;
  replay: boolean;
  view: ActivityView;
  status: ActivityStatus;
  category: string;
  participants: number;
  likes: number;
  schedule?: Schedule[];
}

interface ActivityWithPaginationResponse {
  rows: ActivityResponse[];
  pagination: PaginationResponse;
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
  social?: string[];
  coordinates?: {
    latitude: number;
    longitude: number;
  };
  fullNameOfTheLegalEntity?: string;
  legalAddress?: string;
  postAddress?: string;
  inn?: string;
  kpp?: string;
  ogrn?: string;
}

interface RequisitesDto {
  bank?: string;
  bik?: string;
  checkingAccount?: string;
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
  role: 'Administrator' | 'Leading' | 'Manager';
  name: string;
  surname: string;
  email: string;
  phone: string;
  // image?: any;
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

interface FilesDto {
  id?: string;
  file?: File;
}
